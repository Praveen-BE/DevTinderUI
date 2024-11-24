const UserCard = (props) => {
  const user = props;
  const { firstName, lastName, photoUrl, about, age, gender } =
    user?.userData || "";
  return (
    <div className="flex justify-center p-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt={firstName + " Profile Photo"} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            {firstName + " " + lastName}
          </h2>
          <div className="flex justify-center">
            {age && <h1>Age : {age}</h1>}
            {" " + " "}
            {gender && <h1> &nbsp; &nbsp;Gender : {gender}</h1>}
          </div>
          <p>{about}</p>
          <div className="card-actions justify-center flex">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
