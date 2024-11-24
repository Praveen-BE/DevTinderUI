const CardConnection = (props) => {
  const { friends } = props;
  const { firstName, lastName, photoUrl, about } = friends;
  return (
    <div className="flex justify-center w-full my-2">
      <div className="w-2/4">
        <div className="flex items-center h-30 w-full bg-base-300">
          <figure>
            <img
              className="w-20 h-20 mx-2 rounded-full"
              src={photoUrl}
              alt={firstName + lastName + "Image"}
            />
          </figure>
          <div className="">
            <h2 className="">{firstName + " " + lastName}</h2>
            <p className="overflow-hidden">{about}</p>
          </div>
          {/* <div className="flex justify-end">
              <button className="btn btn-primary"></button>
              <button className="btn btn-primary">Watch</button>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardConnection;
