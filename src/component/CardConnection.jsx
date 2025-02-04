const CardConnection = (props) => {
  const { friends } = props;
  const { firstName, lastName, photoUrl, about } = friends;
  return (
    <div className="m-1 flex justify-center w-full">
      <div className="w-full md:w-2/4">
        <div className="flex items-center h-30 w-full bg-base-300">
          <figure className="w-3/12">
            <img
              className="my-1 rounded-full"
              src={photoUrl}
              alt={firstName + lastName + "Image"}
            />
          </figure>
          <div className="ml-4 w-9/12">
            <h2 className="font-bold h-8">{firstName + " " + lastName}</h2>
            <p className="overflow-hidden line-clamp-2 h-13">{about}</p>
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
