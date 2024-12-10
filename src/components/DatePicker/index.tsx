import React, { useState } from "react";
import styles from './datepicker.module.scss';
import { NamesOfDays } from "../../constants";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import ChevronRightIcon from "../Icons/ChevronRightIcon";
import { 
	startOfToday,
	format, 
	eachDayOfInterval,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	isSameMonth,
	isEqual,
	parse,
	add
} from 'date-fns';

const CustomDatePicker: React.FC = () => {
	const today: Date = startOfToday();
	const [selectedDay, setSelectedDay] = useState<Date>(today);
	const [currentMonth, setCurrentMonth] = useState<string>(format(today, 'MMMM yyyy'));
	const firstDayCurrentMonth: Date = parse(currentMonth, 'MMMM yyyy', new Date());
	const days: Date[] = eachDayOfInterval({
		start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
		end: endOfWeek(endOfMonth(firstDayCurrentMonth))
	});

	const getPreviousMonth = (): void => {
		const firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
		const selectedDayPreviousMonth = add(selectedDay, { months: -1});
        
		setCurrentMonth(format(firstDayPreviousMonth, 'MMMM yyyy'));
		setSelectedDay(selectedDayPreviousMonth)
	}

	const getNextMonth = (): void => {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		const selectedDayNextMonth = add(selectedDay, { months: 1})
        
		setCurrentMonth(format(firstDayNextMonth, 'MMMM yyyy'))
		setSelectedDay(selectedDayNextMonth)
	}

	const selectDay = (value: Date): void => {
		setSelectedDay(value)
		setCurrentMonth(format(value, 'MMMM yyyy'))
	}
	
    return (
		<div className={styles.datePickerWrapper}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.month} data-testid="month">
					    <p>{currentMonth}</p>
						<div className={styles.switcher}>
					        <button type='button' onClick={getPreviousMonth} data-testid="previous-button"><ChevronLeftIcon /></button>
					        <button type='button' onClick={getNextMonth} data-testid="next-button"><ChevronRightIcon /></button>
						</div>
				    </div>
				    <div className={styles.dates} data-testid="datePicker">
						{Object.values(NamesOfDays).map((name, index) => 
						    <p key={index}>{name}</p>
						)}
						{days.map((day, index) => (
							<div 
							    key={index} 
								className={styles.date}
							>
								<button type='button' className={styles.button} onClick={() => selectDay(day)} value={format(day, 'yyyy-MM-dd')}>
								    <time 
									    className={`
											${styles.day}
											${isSameMonth(day, firstDayCurrentMonth) && styles.dayOfCurrentMonth}
											${isEqual(day, selectedDay) && styles.selected}
											`}
									    dateTime={format(day, 'yyyy-MM-dd')}
									>
									{format(day, 'd')}
									</time>
								</button>
							</div>
						))}
				    </div>
				</div>
			</div>
		</div>
	)
}

export default CustomDatePicker;
