import { Command, flags } from '@oclif/command';
import { ProjectsBundle } from '@gitbeaker/node';
import * as moment from 'moment';
import { toMarkdown, toRaw } from '../utils/transformers';
import { allProjects } from '../utils/projectsUtil';
import Config from '../utils/config';

export type MergeRequest = {
  title: string;
  description: string;
  tags: string[];
  author: string;
  merged_at: string;
  source: string;
  target: string;
  sha: string;
  url: string;
}

export type Project = {
  path_with_namespace: string;
}

export default class MR extends Command {
  static description = 'Get a list of merge requests that have been closed since latest tag'

  static examples = [
    'mr api',
    'mr api --target dev',
    'mr api --target dev --output md',
  ];

  static args = [
    { name: 'project', required: true },
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    target: flags.string({
      char: 't',
      name: 'target',
      default: 'master',
    }),
    output: flags.string({
      char: 'o',
      name: 'output',
      default: 'raw',
      options: ['md', 'raw'],
    }),
  }

  async run() {
    const { args, flags: { target, output } } = this.parse(MR);
    const repos = await allProjects();

    if (!repos.map(r => r.name.toLowerCase()).includes(args.project)) {
      this.error('Project does not exist', { exit: 0 });
    }

    const selectedProject = repos.find(r => r.name.toLowerCase() === args.project) as Project;

    const project = await new ProjectsBundle({
      host: new Config().host,
      token: new Config().token,
    });

    const [lastTag]: any = await project.Tags.all(selectedProject.path_with_namespace);
    const { name, commit } = lastTag;

    this.log(`Fetching merge requests created since latest tag (${name})`);

    const mergeRequests = await project.MergeRequests
      .all({
        projectId: selectedProject.path_with_namespace,
        state: 'merged',
        targetBranch: target,
        createdAfter: moment(commit.created_at).format('YYYY-MM-DD HH:MM:ii'),
      }) as MergeRequest[];

    const res = mergeRequests.map((mr: any) => ({
      title: mr.title,
      description: mr.description,
      merged_at: mr.merged_at,
      author: mr.author.name,
      merged_by: mr.merged_by.name,
      tags: mr.labels,
      url: mr.web_url,
      sha: mr.sha,
      target: mr.target_branch,
      source: mr.source_branch,
    }));

    if (output === 'md') {
      return this.log(toMarkdown(res));
    }

    this.log(toRaw(res));
  }
}
