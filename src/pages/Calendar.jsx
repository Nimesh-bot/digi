/* eslint-disable no-unreachable */
import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, Select, setOptions, Popup, Input, Textarea, Checkbox, Radio, RadioGroup, Datepicker, SegmentedGroup, SegmentedItem, formatDate } from '@mobiscroll/react';
import Heading from '../components/Reusables/Heading';
import { getEvent } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

// const defaultEvents = [{
//     id: 1,
//     start: '2022-04-08T13:00',
//     end: '2022-04-08T13:30',
//     title: 'Blokchain Introduction',
//     description: '',
//     allDay: false,
//     status: 'free',
//     color: '#26c57d'
// }, {
//     id: 2,
//     start: '2022-04-29T15:00',
//     end: '2022-04-29T16:00',
//     title: 'AR/VR Workshop',
//     description: '',
//     allDay: false,
//     status: 'busy',
//     color: '#fd966a'
// }, {
//     id: 3,
//     start: '2022-04-28T18:00',
//     end: '2022-04-28T22:00',
//     title: 'Web Development Workshop',
//     description: '',
//     allDay: false,
//     status: 'free',
//     color: '#37bbe4'
// }, {
//     id: 4,
//     start: '2022-04-30T10:30',
//     end: '2022-04-30T11:30',
//     title: 'Graphic Designing Workshop',
//     description: '',
//     allDay: false,
//     status: 'busy',
//     color: '#d00f0f'
// }];

const viewSettings = {
    calendar: { labels: true }
};
const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 510,
        fullScreen: false,
        touchUi: false
    }
};

// const selectResponsive = {
//     xsmall: {
//         touchUi: true
//     },
//     small: {
//         touchUi: false
//     }
// };

const days = [{
    name: 'Sun',
    value: 'SU',
    checked: true
}, {
    name: 'Mon',
    value: 'MO',
    checked: false
}, {
    name: 'Tue',
    value: 'TU',
    checked: false
}, {
    name: 'Wed',
    value: 'WE',
    checked: false
}, {
    name: 'Thu',
    value: 'TH',
    checked: false
}, {
    name: 'Fri',
    value: 'FR',
    checked: false
}, {
    name: 'Sat',
    value: 'SA',
    checked: false
}];

const months = [{
    value: 1,
    text: 'January'
}, {
    value: 2,
    text: 'February'
}, {
    value: 3,
    text: 'March'
}, {
    value: 4,
    text: 'April'
}, {
    value: 5,
    text: 'May'
}, {
    value: 6,
    text: 'June'
}, {
    value: 7,
    text: 'July'
}, {
    value: 8,
    text: 'August'
}, {
    value: 9,
    text: 'September'
}, {
    value: 10,
    text: 'October'
}, {
    value: 11,
    text: 'November'
}, {
    value: 12,
    text: 'December'
}];

const dayInputProps = {
    className: 'custom-repeat-input custom-repeat-select-nr',
    inputStyle: 'outline'
};

const monthInputProps = {
    className: 'custom-repeat-input custom-repeat-select-month',
    inputStyle: 'outline'
};

const dateInputProps = {
    className: 'custom-repeat-input custom-specific-date',
    inputStyle: 'outline'
};

function Calendar() {
    // Events
    const [defaultEvents, setDefaultEvents] = React.useState([])
    let dispatch = useDispatch();
    React.useEffect(() => {
        getEvent(dispatch, setDefaultEvents)
    }, [dispatch])

    const [myEvents, setMyEvents] = React.useState(defaultEvents);
    const [tempEvent, setTempEvent] = React.useState(null);
    const [isOpen, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);
    const [popupEventTitle, setTitle] = React.useState('');
    const [popupEventDescription, setDescription] = React.useState('');
    const [popupEventAllDay, setAllDay] = React.useState(true);
    const [popupEventDate, setDate] = React.useState([]);
    const [popupEventStatus, setStatus] = React.useState('busy');
    const [mySelectedDate, setSelectedDate] = React.useState(new Date());

    // recurring editor data
    const [repeatData, setRepeatData] = React.useState([{
        value: 'norepeat',
        text: 'Does not repeat'
    }, {
        value: 'daily',
        text: 'Daily'
    }, {
        value: 'weekly',
        text: 'Weekly'
    }, {
        value: 'monthly',
        text: 'Monthly'
    }, {
        value: 'yearly',
        text: 'Yearly'
    }, {
        value: 'weekday',
        text: 'Every weekday (Monday to Friday)'
    }, {
        value: 'custom',
        text: 'Custom'
    }]);
    const [selectedRepeat, setSelectedRepeat] = React.useState('norepeat');
    const [repeatType, setRepeatType] = React.useState('daily');
    const [repeatNr, setRepeatNr] = React.useState(1);
    const [condition, setCondition] = React.useState('never');
    const [untilDate, setUntilDate] = React.useState();
    const [occurrences, setOccurrences] = React.useState(1);
    const [selectedMonth, setMonth] = React.useState(1);
    const [monthlyDays, setMonthlyDays] = React.useState(['1']);
    const [monthlyDay, setMonthlyDay] = React.useState('1');
    const [yearlyDays, setYearlyDays] = React.useState(['1']);
    const [yearlyDay, setYearlyDay] = React.useState('1');
    const [weekDays, setWeekDays] = React.useState([...days]);

    // set custom values to default
    const resetCustomValues = React.useCallback((recurring) => {
        setRepeatType('daily');
        setRepeatNr(1);
        setCondition('never');
        setOccurrences(1);
        setMonth(1);
        setMonthlyDay(1);
        setYearlyDay(1);
        const newWeekDays = [...days];
        for (let i = 0; i < newWeekDays.length; i++) {
            const day = newWeekDays[i];
            day.checked = day.value === 'SU';
        };
        setWeekDays(newWeekDays);
        setSelectedRepeat('norepeat');
        setRepeatData(repeatData.filter(item => item.value !== 'custom-value'))
    }, [repeatData]);

    const navigateTo = React.useCallback(() => {
        const rec = tempEvent.recurring;
        const d = new Date(tempEvent.start);
        let nextYear = 0;

        // navigate the calendar to the correct view
        if (rec && rec.repeat === 'yearly') {
            if (d.getMonth() + 1 > +rec.month && d.getDay() > +rec.day) {
                nextYear = 1;
            }
            setSelectedDate(new Date(d.getFullYear() + nextYear, rec.month - 1, rec.day));
        } else {
            setSelectedDate(d);
        }
    }, [tempEvent]);

    const saveEvent = React.useCallback(() => {
        let recurringRule;
        const d = new Date(tempEvent.start);

        switch (selectedRepeat) {
            case 'daily':
                recurringRule = { repeat: 'daily' };
                break;
            case 'weekly':
                recurringRule = { repeat: 'weekly', weekDays: weekDays[d.getDay()].value };
                break;
            case 'monthly':
                recurringRule = { repeat: 'monthly', day: d.getDate() };
                break;
            case 'yearly':
                recurringRule = { repeat: 'yearly', month: d.getMonth() + 1 };
                break;
            case 'weekday':
                recurringRule = { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' };
                break;
            case 'custom':
            case 'custom-value':
                recurringRule = {
                    repeat: repeatType,
                    interval: repeatNr
                };

                switch (repeatType) {
                    case 'weekly':
                        recurringRule.weekDays = weekDays.filter(i => i.checked).map(i => i.value).join(',');
                        break;
                    case 'monthly':
                        recurringRule.day = monthlyDay;
                        break;
                    case 'yearly':
                        recurringRule.day = yearlyDay;
                        recurringRule.month = selectedMonth;
                        break;

                    default:
                }

                switch (condition) {
                    case 'until':
                        recurringRule.until = untilDate;
                        break;
                    case 'count':
                        recurringRule.count = occurrences;
                        break;
                    default:
                }
                break;
            default:
        }

        const newEvent = {
            id: tempEvent.id,
            title: popupEventTitle,
            description: popupEventDescription,
            start: popupEventDate[0],
            end: popupEventDate[1],
            allDay: popupEventAllDay,
            status: popupEventStatus,
            color: tempEvent.color,
            recurring: recurringRule
        };
        if (isEdit) {
            // update the event in the list
            const index = myEvents.findIndex(x => x.id === tempEvent.id);
            const newEventList = [...myEvents];

            newEventList.splice(index, 1, newEvent);
            setMyEvents(newEventList);
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            setMyEvents([...myEvents, newEvent]);
            // here you can add the event to your storage as well
            // ...
        }
        // navigate the calendar
        navigateTo();
        // close the popup
        setOpen(false);
    }, [isEdit, myEvents, popupEventAllDay, popupEventDate, popupEventDescription, popupEventStatus, popupEventTitle, tempEvent, navigateTo,
        condition, monthlyDay, yearlyDay, occurrences, repeatNr, repeatType, selectedMonth, selectedRepeat, untilDate, weekDays]);

    // const deleteEvent = React.useCallback((event) => {
    //     setMyEvents(myEvents.filter(item => item.id !== event.id));
    // }, [myEvents]);

    const loadPopupForm = React.useCallback((event) => {
        const startDate = new Date(event.start);
        setTitle(event.title);
        setDescription(event.description);
        setDate([startDate, event.end]);
        setUntilDate(formatDate('YYYY-MM-DD', new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1)));
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');

        const d = new Date(event.start);
        const weekday = d.getDay();
        const monthday = d.getDate();
        const newData = repeatData.slice(0);

        // update select texts by selected date
        for (let i = 0; i < newData.length; ++i) {
            var item = newData[i];
            switch (item.value) {
                case 'weekly':
                    item.text = 'Weekly on ' + days[weekday].name;
                    break;
                case 'monthly':
                    item.text = 'Monthly on day ' + monthday;
                    break;
                case 'yearly':
                    item.text = 'Annually on ' + months[d.getMonth()].text + ' ' + monthday;
                    break;
                default:
            }
        }

        setRepeatData(newData);

        const rec = event.recurring;

        if (rec) {
            setRepeatType(rec.repeat);
            if (rec.interval) {
                // set custom text
                let customText = '';
                const nr = rec.interval;

                setRepeatNr(nr);

                switch (rec.repeat) {
                    case 'daily':
                        customText = nr > 1 ? ('Every ' + nr + ' days') : 'Daily';
                        break;
                    case 'weekly':
                        const newWeekDays = [...days];
                        const weekD = rec.weekDays.split(',');

                        for (let i = 0; i < newWeekDays.length; i++) {
                            const day = newWeekDays[i];
                            day.checked = weekD.includes(day.value);
                        };

                        setWeekDays(newWeekDays);
                        customText = nr > 1 ? ('Every ' + nr + ' weeks') : 'Weekly';
                        customText += ' on ' + newWeekDays.filter(i => i.checked).map(i => i.name).join(', ');
                        break;
                    case 'monthly':
                        setMonthlyDay(rec.day);
                        customText = nr > 1 ? ('Every ' + nr + ' months') : 'Monthly';
                        customText += ' on day ' + rec.day;
                        break;
                    case 'yearly':
                        setYearlyDay(rec.day);
                        setMonth(rec.month);
                        customText = nr > 1 ? ('Every ' + nr + ' years') : 'Annualy';
                        customText += ' on ' + months[rec.month - 1].text + ' ' + rec.day;
                        break;
                    default:
                }

                if (rec.until) {
                    setCondition('until');
                    setUntilDate(rec.until);
                    customText += ' until ' + formatDate('MMMM D, YYYY', new Date(rec.until));
                } else if (rec.count) {
                    setCondition('count');
                    setOccurrences(rec.count);
                    customText += ', ' + rec.count + ' times';
                } else {
                    setCondition('never');
                }

                // add custom value
                setRepeatData([...repeatData, { value: 'custom-value', text: customText }]);
                // set custom value
                setSelectedRepeat('custom-value');
            } else if (rec.weekDays === 'MO,TU,WE,TH,FR') {
                setSelectedRepeat('weekday');
            } else {
                setSelectedRepeat(rec.repeat);
            }
        } else {
            resetCustomValues();
        }
    }, [repeatData, resetCustomValues]);

    // handle popup form changes

    const titleChange = React.useCallback((ev) => {
        setTitle(ev.target.value);
    }, []);

    const descriptionChange = React.useCallback((ev) => {
        setDescription(ev.target.value);
    }, []);

    // const allDayChange = React.useCallback((ev) => {
    //     setAllDay(ev.target.checked);
    // }, []);

    const dateChange = React.useCallback((args) => {
        setDate(args.value);
    }, []);

    // const statusChange = React.useCallback((ev) => {
    //     setStatus(ev.target.value);
    // }, []);

    // const onDeleteClick = React.useCallback(() => {
    //     deleteEvent(tempEvent);
    //     setOpen(false);
    // }, [deleteEvent, tempEvent]);

    // popuplate data for months
    const populateMonthDays = React.useCallback((month, type) => {
        const day30 = [2, 4, 6, 9, 11];
        let newValues = [];

        for (let i = 1; i <= 31; i++) {
            if (!(i === 31 && day30.includes(month)) && !((i === 30) && month === 2)) {
                newValues.push(i.toString());
            }
        }

        if (type === 'monthly') {
            setMonthlyDays(newValues);
            setMonthlyDay(1);
        } else {
            setYearlyDays(newValues);
            setYearlyDay(1);
        }
    }, [setMonthlyDays, setYearlyDays]);

    // const repeatChange = React.useCallback((ev) => {
    //     setSelectedRepeat(ev.value);
    // }, []);

    const repeatTypeChange = React.useCallback((ev) => {
        setRepeatType(ev.target.value);
    }, []);

    const repeatNrChange = React.useCallback((ev) => {
        setRepeatNr(ev.target.value);
    }, []);

    const conditionChange = React.useCallback((ev) => {
        setCondition(ev.target.value);
    }, []);

    const untilDateChange = React.useCallback((ev) => {
        setUntilDate(ev.value);
    }, []);

    const occurrancesChange = React.useCallback((ev) => {
        setOccurrences(ev.target.value);
    }, []);

    const monthsChange = React.useCallback((ev) => {
        setMonth(ev.value);
        populateMonthDays(ev.value, 'yearly');
    }, [populateMonthDays]);

    const monthlyDayChange = React.useCallback((ev) => {
        setMonthlyDay(ev.value);
    }, []);

    const yearlyDayChange = React.useCallback((ev) => {
        setYearlyDay(ev.value);
    }, []);

    const weekDayChange = React.useCallback((ev) => {
        weekDays.find(i => i.value === ev.target.value).checked = ev.target.checked;
        setWeekDays([...weekDays]);
    }, [weekDays]);

    // scheduler options

    // const onSelectedDateChange = React.useCallback((event) => {
    //     setSelectedDate(event.date);
    // }, []);

    const onEventClick = React.useCallback((args) => {
        setEdit(true);
        setTempEvent({ ...args.event });
        // fill popup form with event data
        loadPopupForm(args.event);
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, [loadPopupForm]);

    // const onEventCreated = React.useCallback((args) => {
    //     setEdit(false);
    //     resetCustomValues();
    //     setTempEvent(args.event)
    //     // fill popup form with event data
    //     loadPopupForm(args.event);
    //     setAnchor(args.target);
    //     // open the popup
    //     setOpen(true);
    // }, [loadPopupForm, resetCustomValues]);

    // const onEventDeleted = React.useCallback((args) => {
    //     deleteEvent(args.event)
    // }, [deleteEvent]);

    // const onEventUpdated = React.useCallback((args) => {
    //     // here you can update the event in your storage as well, after drag & drop or resize
    //     // ...
    // }, []);

    // datepicker options
    const controls = React.useMemo(() => popupEventAllDay ? ['calendar'] : ['calendar', 'time'], [popupEventAllDay]);
    const respSetting = React.useMemo(() => popupEventAllDay ? {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    } : {
        medium: {
            controls: ['calendar', 'time'],
            touchUi: false
        }
    }, [popupEventAllDay]);

    // popup options
    const headerText = React.useMemo(() => isEdit ? 'Edit event' : 'New Event', [isEdit]);
    const popupButtons = React.useMemo(() => {
        if (isEdit) {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Save',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
        else {
            return [
                'cancel',
                {
                    handler: () => {
                        saveEvent();
                    },
                    keyCode: 'enter',
                    text: 'Add',
                    cssClass: 'mbsc-popup-button-primary'
                }
            ];
        }
    }, [isEdit, saveEvent]);

    const onPopupClose = React.useCallback(() => {
        setRepeatData(repeatData.filter(item => item.value !== 'custom-value'));
        if (!isEdit) {
            // refresh the list, if add popup was canceled, to remove the temporary event
            setMyEvents([...myEvents]);
        }
        setOpen(false);
    }, [isEdit, myEvents, repeatData]);

    React.useEffect(() => {
        populateMonthDays(1, 'monthly');
        setMonthlyDay(1);
        populateMonthDays(1, 'yearly');
        setYearlyDay(1);
    }, [populateMonthDays]);

    return <div className='flex flex-col px-4 md:px-20 py-28 gap-y-8'>
        <Heading heading1="Calendar" heading5="Get upto date" />
        <Eventcalendar
            view={viewSettings}
            data={myEvents}
            // clickToCreate="double"
            // dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            selectedDate={mySelectedDate}
            // onSelectedDateChange={onSelectedDateChange}
            onEventClick={onEventClick}
            // onEventCreated={onEventCreated}
            // onEventDeleted={onEventDeleted}
            // onEventUpdated={onEventUpdated}
        />
        <Popup
            display="bottom"
            fullScreen={true}
            contentPadding={false}
            scrollLock={false}
            headerText={headerText}
            anchor={anchor}
            buttons={popupButtons}
            isOpen={isOpen}
            onClose={onPopupClose}
            responsive={responsivePopup}
            height={500}
        >
            <div className="mbsc-form-group">
                <Input label="Title" value={popupEventTitle} onChange={titleChange} />
                <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
            </div>
            <div className="mbsc-form-group">
                {/* <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} /> */}
                <Input ref={startRef} label="Starts" />
                <Input ref={endRef} label="Ends" />
                <Datepicker
                    select="range"
                    controls={controls}
                    touchUi={true}
                    startInput={start}
                    endInput={end}
                    showRangeLabels={false}
                    responsive={respSetting}
                    onChange={dateChange}
                    value={popupEventDate}
                />
                {/* <Select
                    data={repeatData}
                    label="Repeats"
                    value={selectedRepeat}
                    responsive={selectResponsive}
                    onChange={repeatChange}
                /> */}
                {(selectedRepeat === 'custom' || selectedRepeat === 'custom-value') && <div>
                    <div>
                        <SegmentedGroup onChange={repeatTypeChange}>
                            <SegmentedItem value="daily" checked={repeatType === 'daily'}>Daily</SegmentedItem>
                            <SegmentedItem value="weekly" checked={repeatType === 'weekly'}>Weekly</SegmentedItem>
                            <SegmentedItem value="monthly" checked={repeatType === 'monthly'}>Monthly</SegmentedItem>
                            <SegmentedItem value="yearly" checked={repeatType === 'yearly'}>Yearly</SegmentedItem>
                        </SegmentedGroup>

                        <div className="custom-repeat-settings">
                            Repeat every
                            <Input className="custom-repeat-input" min="1" value={repeatNr} onChange={repeatNrChange} inputStyle="outline" />
                            {repeatType === 'daily' && <span>days</span>}
                            {repeatType === 'weekly' && <span>weeks</span>}
                            {repeatType === 'monthly' && <span>
                                months on day
                                <Select className="custom-repeat-input custom-repeat-select-month" data={monthlyDays} value={monthlyDay} onChange={monthlyDayChange} inputProps={dayInputProps} />
                            </span>}
                            {repeatType === 'yearly' && <span>
                                years on
                                <Select className="custom-repeat-input custom-repeat-select-nr" data={months} value={selectedMonth} onChange={monthsChange} inputProps={monthInputProps} />
                                <Select className="custom-repeat-input custom-repeat-select-month" data={yearlyDays} value={yearlyDay} onChange={yearlyDayChange} inputProps={dayInputProps} />
                            </span>}

                            {repeatType === 'daily' && <p className="custom-repeat-desc">The event will be repeated every day or every x days, depending on the value</p>}
                            {repeatType === 'weekly' && <p className="custom-repeat-desc">The event will be repeated every x weeks on specific weekdays</p>}
                            {repeatType === 'monthly' && <p className="custom-repeat-desc">The event will be repeated every x month on specific day of the month</p>}
                            {repeatType === 'yearly' && <p className="custom-repeat-desc">The event will be repeated every x years on specific day of a specific month</p>}

                            {repeatType === 'weekly' && <div className="custom-repeat-checkbox-cont">
                                {days.map((day) => {
                                    return <Checkbox value={day.value} key={day.value} checked={day.checked} onChange={weekDayChange}>{day.name}</Checkbox>
                                })}
                            </div>}

                            <div>Stop condition</div>
                            <div className="custom-condition-cont">
                                <RadioGroup>
                                    <Radio label="Never stop" description="The event will repeat indefinitely" checked={condition === 'never'} onChange={conditionChange} value="never" />
                                    <Radio checked={condition === 'until'} onChange={conditionChange} value="until">
                                        Run until a specific date
                                        <Datepicker
                                            inputProps={dateInputProps}
                                            controls={['calendar']}
                                            display="anchored"
                                            touchUi={false}
                                            dateFormat="YYYY-MM-DD"
                                            returnFormat="iso8601"
                                            value={untilDate}
                                            onChange={untilDateChange}
                                            onOpen={() => setCondition('until')}
                                        />
                                        <span className="mbsc-description">The event will run until it reaches a specific date</span>
                                    </Radio>
                                    <Radio checked={condition === 'count'} onChange={conditionChange} value="count">
                                        Run until it reaches
                                        <Input className="custom-repeat-input" inputStyle="outline" value={occurrences} onChange={occurrancesChange} onClick={(e) => setCondition('count')} />
                                        occurrences
                                        <span className="mbsc-description">The event will repeat until it reaches a certain amount of occurrences</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </div>}
                {/* <SegmentedGroup onChange={statusChange}>
                    <SegmentedItem value="busy" checked={popupEventStatus === 'busy'}>Show as busy</SegmentedItem>
                    <SegmentedItem value="free" checked={popupEventStatus === 'free'}>Show as free</SegmentedItem>
                </SegmentedGroup> */}
                {/* {isEdit && <div className="mbsc-button-group"><Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button></div>} */}
            </div>
        </Popup>
    </div>
}

export default Calendar;