import { cp, mkdir, readdir } from 'node:fs/promises';

import { select } from '@inquirer/prompts';
import path from 'path';

const main = async () => {
    const uiSrc = 'packages/ui/src';
    const appSrc = 'apps';
    const uiSourcePath = path.join(process.cwd(), uiSrc);

    const apps = path.join(process.cwd(), 'apps');
    const targetFolders = await readdir(apps);
    const target = await select({
        message: 'witch app do you want to create?',
        choices: targetFolders.map((name) => ({
            name,
            value: name,
        })),
        type: 'list',
    });

    const uiUrl = await readdir(uiSourcePath);
    const onlyFolders = uiUrl.filter((name) => !name.includes('.'));

    const selected = await select({
        message: 'client component or server component?',
        choices: onlyFolders.map((name) => ({
            name,
            value: name,
        })),
        type: 'list',
    });

    const componentPath = path.join(uiSourcePath, selected);

    const UiComponents = await readdir(componentPath);

    const selectedComponent = await select({
        message: 'witch component do you want to create?',
        choices: UiComponents.map((name) => ({
            name,
            value: name,
        })),
        type: 'list',
    });

    const component = path.join(uiSrc, selected, selectedComponent);
    const targetPath = path.join(appSrc, target, 'src/components', selectedComponent);

    try {
        await mkdir(targetPath);
        await cp(component, targetPath, {
            filter: (file) => !file.includes('.stories'),
            recursive: true,
        });
    } catch (e) {
        await cp(component, targetPath, {
            filter: (file) => !file.includes('.stories'),
            recursive: true,
        });
    }
    console.log(`${selectedComponent} has been copied to  ${targetPath} successfully!`);
};

main().catch((error) => {
    console.error('Error occurred:', error);
});
