const getItems = (state) => state.items;

const getItemsSubset = createSelector(
    [getItems],
    (items) => {
    		console.log("Recalculate filter");
        return items.filter((item) => item.startsWith("I"));
    }
);
