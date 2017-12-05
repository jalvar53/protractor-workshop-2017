import { AwesomeReport } from 'jasmine-awesome-report';

export let awesomeReporter = () => {
  const config = {
    fullPath: 'reports',
    fileName: 'awesome',
    merge: true
  };
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};


