import { Projects } from '@gitbeaker/node';
import cli from 'cli-ux';
import Config from './config';

/* eslint-disable indent */
export const allProjects = async () => {
    cli.action.start('Fetching all repos');

    const projects = await new Projects({
        host: new Config().host,
        token: new Config().token,
    })
        .all();

    cli.action.stop();

    return projects;
};
/* eslint-enable indent */
