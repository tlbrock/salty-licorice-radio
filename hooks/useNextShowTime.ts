import { useState, useEffect } from "react";
import { DateTime } from "luxon";

const showDay = 2; // Tuesday
const showHour = 19; // 7
const showMinute = 0; // 00 minutes, mainly for testing purposes
const showLengthHours = 2; // Show lasts for 2 hours
const showWeeks = [2, 4]; // Show is on the 2nd and 4th Tuesday of the month]

export function useNextShowTime() {
    const getNextShowTime = () => {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        let showDays = getShowDays(currentMonth, currentYear);

        // create date objects
        // const showDateTimes = showDays.map(day => new Date(currentYear, currentMonth, day, showHour, showMinute));
        const showDateTimes = showDays.map(day =>
            DateTime.fromObject(
                { year: currentYear, month: currentMonth + 1, day, hour: showHour, minute: showMinute },
                { zone: "America/New_York" }
            ).toJSDate()
        );

        for (const showDateTime of showDateTimes) {
            const showEndTime = new Date(showDateTime.getTime() + showLengthHours * 60 * 60 * 1000);
            if (now < showEndTime) {
                return showDateTime;
            }
        }

        // If it's past the last show of the month, calculate the next month's show time
        const nextMonth = (currentMonth + 1) % 12;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

        showDays = getShowDays(nextMonth, nextYear);
        return new Date(nextYear, nextMonth, showDays[0], showHour, 0); // showHour PM on the first show day of the next month

    };

    const getIsLiveNow = () => {
    }

    return { getNextShowTime, getIsLiveNow };
}

export function useIsLiveNow() {
    const [isLiveNow, setIsLiveNow] = useState(false);
    const { getNextShowTime } = useNextShowTime();

    useEffect(() => {
        const checkLiveStatus = () => {
            const now = new Date();
            const nextShowTime = getNextShowTime();
            const showEndTime = new Date(nextShowTime.getTime() + 2 * 60 * 60 * 1000); // Show lasts for 2 hours
            setIsLiveNow(now >= nextShowTime && now <= showEndTime);
        }

        // check live status immediately and then every minute
        checkLiveStatus();
        const intervalId = setInterval(checkLiveStatus, 60 * 1000);
        return () => clearInterval(intervalId);
    }, [getNextShowTime]);
    return isLiveNow;
}

function getShowDays(month: number, year: number) {
    const firstDayOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const showDays = [];
    const firstShowDay = 1 + ((showDay - firstDayOfWeek + 7) % 7);
    for (const week of showWeeks) {
        const showDay = firstShowDay + (week - 1) * 7;
        showDays.push(showDay);
    }
    return showDays;
}