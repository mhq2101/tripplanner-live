
// globals


$(document).ready(function () {
    const $addBtn = $(".btn-primary")
    const $addDay = $(".day-buttons")
    const $rmvBtn = $("#itinerary")
    let $addType;
    const markerArr = [];

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
        // $addType.append($(`<button class="btn btn-xs btn-danger remove btn-circle">x</button>`));
        console.log("ADD TYPE:",$addType)
        let mapAdd = category.filter(function (item) {
            return item.name === appObj;
        })
        // Put that shit on the map
        $addType.append($(`<button class="btn btn-xs btn-danger remove btn-circle">x</button>`)
        .data(drawMarker(jsDataLabel.split('-')[0], mapAdd[0].place.location)));

    })

    $rmvBtn.on("click", ".remove", function (event) {

        // Remove DOM elements
        $(this)[0].previousSibling.remove()
        $(this).data().setMap(null);
        $(this).remove()
    })

    $addDay.on("click", "#day-add", function (event) {
        // const newNum = $(this)[0].previousSibling.nodeType + 1;
        // console.log(newNum);
        $(this)[0].append($`<button class="btn btn-circle day-btn">4</button>`)
        
    })

});



























