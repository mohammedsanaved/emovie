import React, { useContext, useEffect, useState } from "react";
import { ThreeCircles, Puff } from "react-loader-spinner";
import ReactStars from "react-stars";
import { reviewRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";

const Reviews = ({ id, prevRating, userRated }) => {
  const navigate = useNavigate();
  const useAppstate = useContext(Appstate);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const [newAdded, setNewAdded] = useState(0);

  const sendReview = async () => {
    setLoading(true);
    try {
      if (useAppstate.login) {
        await addDoc(reviewRef, {
          movieid: id,
          name: useAppstate.userName,
          rating: rating,
          thoughts: form,
          timestamp: new Date().getTime(),
        });
        const ref = doc(db, "movies", id);
        await updateDoc(ref, {
          rating: prevRating + rating,
          rated: userRated + 1,
        });
        setRating(0);
        setForm("");
        setNewAdded(newAdded + 1);
        swal({
          title: "review set",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
      } else {
        navigate("/login");
      }
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      let quer = query(reviewRef, where("movieid", "==", id));
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setReviewsLoading(false);
    }
    getData();
  }, [newAdded]);
  return (
    <div className="mt-4 py-1 border-t-2 border-gray-600 w-full">
      <ReactStars
        size={25}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        type="text"
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Review here"
        className="p-4 w-full outline-none bg-slate-800 rounded"
      />
      <button
        onClick={sendReview}
        className="w-full bg-sky-400 flex text-center justify-center p-3 mt-2 rounded text-black"
      >
        {loading ? <Puff height={20} color={"white"} /> : "Share"}
      </button>
      {reviewsLoading ? (
        <div className="mt-2 flex justify-center">
          <ThreeCircles height={20} color={"white"} />
        </div>
      ) : (
        <div className="mt-4">
          {data.map((e, i) => {
            return (
              <div key={i} className={"bg-slate-800 rounded w-full mt-2 p-1"}>
                <div className="flex items-center">
                  <p className="text-orange-500">{e.name} </p>
                  <p className="ml-2 text-sm">
                    ({new Date(e.timestamp).toLocaleString()})
                  </p>
                </div>
                <ReactStars
                  size={20}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thoughts}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
