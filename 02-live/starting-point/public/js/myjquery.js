$(document).ready(function () {
    const $addBtn = $(".btn-primary")
    const $rmvBtn;
    let $addType;

    $addBtn.on('click', function () {
        const appObj = $($(this).siblings()[1]).find(":selected").text();
        const jQueryDataLabel = $($(this).siblings()[1]);
        const jsDataLabel = jQueryDataLabel[0].id
        let category;

        // Discern b/t hotel, restaurant, activity
        if (jsDataLabel === "hotel-choices") {
            $addType = $(".hotel");
            category = hotels;
        } else if (jsDataLabel === "restaurant-choices") {
            $addType = $(".restaurant");
            category = restaurants
        } else {
            $addType = $(".activity")
            category = activities;
        }

        // Append appropriate trip item to DOM
        $addType.append($(`<span class="title">` + appObj + `</span>`));
        $addType.append($(`<button class="btn btn-xs btn-danger remove btn-circle">x</button>`));
        let mapAdd = category.filter(function (item) {
            return item.name === appObj;
        })

        // Put that shit on the map
        mapInit[0].drawMarker(jsDataLabel.split('-')[0], mapAdd[0].place.location)

    })
});



























