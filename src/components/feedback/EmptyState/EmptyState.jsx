import { Link } from "react-router-dom";

const EmptyState = ({ message, actionLabel, actionTo }) => {
  return (
    <section className="section container">
      <div className="card empty-state">
        <p>{message}</p>
        {actionLabel && actionTo && (
          <Link to={actionTo} className="btn-cart">
            {actionLabel}
          </Link>
        )}
      </div>
    </section>
  );
};

export default EmptyState;
