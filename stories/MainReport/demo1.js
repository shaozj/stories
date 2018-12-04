import React from 'react';
import MainReport from '~/component/MainReport';
import moment from 'moment';

const cubeReport = [
  {
    accuracy: '0.7181',
    date: '2018-01-02 00:00:00',
    predict: '1216341661451.6',
    real: '1693759401269',
  },
  {
    accuracy: '0.9378',
    date: '2018-01-03 00:00:00',
    predict: '542800753109.6',
    real: '511021770626',
  },
  {
    accuracy: '0.8401',
    date: '2018-01-04 00:00:00',
    predict: '565998504641.5',
    real: '487981805000',
  },
  {
    accuracy: '0.4989',
    date: '2018-01-05 00:00:00',
    predict: '712350430467.7',
    real: '474561849214',
  },
  {
    accuracy: '0.9694',
    date: '2018-01-08 00:00:00',
    predict: '1.20376780516E+12',
    real: '1241716552400',
  },
  {
    accuracy: '0.2666',
    date: '2018-01-09 00:00:00',
    predict: '923353532508',
    real: '532683097484',
  },
  {
    accuracy: '0.7314',
    date: '2018-01-10 00:00:00',
    predict: '685759367971.6',
    real: '540548356609',
  },
  {
    accuracy: '0.9988',
    date: '2018-01-11 00:00:00',
    predict: '517625771196.8',
    real: '516998797065',
  },
  {
    accuracy: '0.9431',
    date: '2018-01-12 00:00:00',
    predict: '514299242024.1',
    real: '486614189772',
  },
  {
    accuracy: '0.9451',
    date: '2018-01-15 00:00:00',
    predict: '1237099000249.6',
    real: '1308986137284',
  },
  {
    accuracy: '0.9445',
    date: '2018-01-16 00:00:00',
    predict: '547369139647.2',
    real: '579533072811',
  },
];

const rangeTime = [moment().subtract(2, 'months'), moment()].map((time) =>
  time.format('YYYY-MM-DD 00:00:00'),
);

export default () => <MainReport rangeTime={rangeTime} data={cubeReport} />;
