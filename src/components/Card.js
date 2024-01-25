const Card = (props) => {
  return (
    <div className="flip rounded-lg overflow-hidden">
      <div className="flip-inside relative">
        {/* Front side */}
        <div className="flip-card-front relative">
          <img src={props.item.coverImg} alt="Avatar" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute top-0 right-0 p-4">
            <h3 className="text-2xl font-bold text-[white]">{props.item.title}</h3>
          </div>
        </div>

        {/* Back side */}
        <div className="flip-card-back rounded-lg flex-col items-center justify-center">
         <p className="text-lg p-4 mt-10">{props.item.description}</p>
          <a href="#" >Czytaj więcej</a>
        </div>
      </div>
    </div>
  );
};

export default Card;

