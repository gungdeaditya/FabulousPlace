import { DELETE_PLACE, SET_PLACES, REMOVE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(
      "https://us-central1-fabulousplace-6485b.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch("https://fabulousplace-6485b.firebaseio.com/places.json", {
          method: "POST",
          body: JSON.stringify(placeData)
        });
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again");
        dispatch(uiStopLoading());
      });
  };
};

export const getPlace = () => {
  return dispatch => {
    fetch("https://fabulousplace-6485b.firebaseio.com/places.json")
      .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again");
      })
      .then(res => res.json())
      .then(parsedRes => {
        const places = [];
        for (let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          });
        }
        dispatch(setPlaces(places));
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places: places
  };
};

export const deletePlace = key => {
  return dispatch => {
    fetch(
      "https://fabulousplace-6485b.firebaseio.com/places/" + key + ".json",
      {
        method: "DELETE"
      }
    ).catch(err => {
      console.log(err);
      alert("Something went wrong, please try again");
    })
    .then(res => res.json())
    .then(parsedRes => {
      dispatch(removePlace(key));
    });
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    key: key
  }
}
