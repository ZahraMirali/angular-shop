"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = void 0;
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_1 = require("./package");
// Just return the tree
function ngAdd(options) {
    return (tree, context) => {
        const angularDependencyVersion = '^14.0.0';
        (0, package_1.addPackageToPackageJson)(tree, '@angular/cdk', angularDependencyVersion);
        (0, package_1.addPackageToPackageJson)(tree, '@angular/forms', angularDependencyVersion);
        (0, package_1.addPackageToPackageJson)(tree, '@angular/animations', angularDependencyVersion);
        if (options.fontAwesome) {
            (0, package_1.addPackageToPackageJson)(tree, '@fortawesome/fontawesome-free', '^6.0.0');
        }
        if (options.charts) {
            (0, package_1.addPackageToPackageJson)(tree, 'chart.js', '^3.1.1');
        }
        const installMainDependenciesTask = context.addTask(new tasks_1.NodePackageInstallTask());
        context.addTask(new tasks_1.RunSchematicTask('ng-add-mdb-setup', options), [
            installMainDependenciesTask,
        ]);
    };
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map