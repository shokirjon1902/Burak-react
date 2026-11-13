import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/data/types/screen";
import HomePage from ".";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrevePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes,
);

export const retreveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes,
);

export const retreveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers,
);
