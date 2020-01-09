import React from 'react';
import { Calendar, Select, Radio, Col, Row } from 'antd';
import DateCell from './DateCell';

const { Group, Button } = Radio;


const Calendars = () => {


  const onSelect = (date) => {
    console.log(date, 'date');    
  }

  const dateCellRender = (cell) => {
    return <DateCell date={cell}/>
  }

  return (
    <div style={{ width: 500, height: '400px', border: '1px solid #d9d9d9', borderRadius: 4, marginTop: '30px' }}>
    <Calendar
      fullscreen={false}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        
        const start = 0;
        const end = 12;
        const monthOptions = [];

        const current = value.clone();
        const localeData = value.localeData();
        const months = [];
        for (let i = 0; i < 12; i++) {
          current.month(i);
          months.push(localeData.monthsShort(current));
        }

        for (let index = start; index < end; index++) {
          monthOptions.push(
            <Select.Option className="month-item" key={`${index}`}>
              {months[index]}
            </Select.Option>,
          );
        }
        const month = value.month();

        const year = value.year();
        const options = [];
        for (let i = year - 10; i < year + 10; i += 1) {
          options.push(
            <Select.Option key={i} value={i} className="year-item">
              {i}
            </Select.Option>,
          );
        }
        // console.log(monthOptions[0], 'monthOptions[0]');
        // console.log(monthOptions[0]._source.lineNumber, 'monthOptions[0]._source.lineNumber');
        // console.log(monthOptions[1]._source.lineNumber, 'monthOptions[1]._source.lineNumber');
        // console.log(monthOptions[2]._source.lineNumber, 'monthOptions[2]._source.lineNumber');

        return (
          <div style={{ padding: 10 }}>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>Check Calendar</div>
            <Row type="flex" justify="space-between">
              <Col>
                <Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                  <Button value="month">Month</Button>
                  <Button value="year">Year</Button>
                </Group>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  className="my-year-select"
                  onChange={newYear => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                  value={String(year)}
                >
                  {options}
                </Select>
              </Col>
              <Col>
                <Select
                  size="small"
                  dropdownMatchSelectWidth={false}
                  value={String(month)}
                  onChange={selectedMonth => {
                    const newValue = value.clone();
                    newValue.month(parseInt(selectedMonth, 10));
                    onChange(newValue);
                  }}
                >
                  {monthOptions}
                </Select>
              </Col>
            </Row>
          </div>
        );
      }}
      mode="month"
      onSelect={onSelect}
      dateCellRender={dateCellRender}
    />
  </div>
  )
}

export default Calendars;