import { DATES } from "../../../config/names";

const {
    locale,
    timeStringOptions,
    shortDateStringOptions,
    longDateStringOptions,
} = DATES;

export const showHourOfThePost = (date) =>
    new Date(date).toLocaleTimeString(locale, timeStringOptions);

export const showLongDateOfThePost = (date) =>
    new Date(date).toLocaleDateString(locale, longDateStringOptions);

export const showShortDateOfThePost = (date) =>
    new Date(date).toLocaleDateString(locale, shortDateStringOptions);

export const getDaysAgo = (date) => {
    const previousDate = new Date(date).getTime();
    const todayDate = new Date().getTime();

    const differenceInDays = Math.floor(
        (previousDate - todayDate) / (1000 * 60 * 60 * 24)
    );

    const daysAgo = new Intl.RelativeTimeFormat("en", {
        style: "narrow",
    }).format(differenceInDays, "day");

    return daysAgo;
};
