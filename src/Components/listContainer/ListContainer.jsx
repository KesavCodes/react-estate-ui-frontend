import Card from "../card/Card";
// import styles from './ListContainer.module.css';

const ListContainer = ({ data }) => {
  return (
    <div className={`d-flex flex-column gap-3`}>
      {data.map((item) => {
        return <Card key={item.id} details={item} />;
      })}
    </div>
  );
};

export default ListContainer;
