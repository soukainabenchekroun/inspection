import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './data/store/store';
import { fetchInspections } from './data/store/slices/inspectionSlice';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // Trigger the fetchInspections action on component mount
  useEffect(() => {
    dispatch(fetchInspections());
  }, [dispatch]);

  // Use useSelector to select inspections, status, and error from the Redux store
  const inspections = useSelector(
    (state: RootState) => state.inspection.inspections,
  );
  const status = useSelector((state: RootState) => state.inspection.status);
  const error = useSelector((state: RootState) => state.inspection.error);

  // Render logic based on the fetch status
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Inspections</h2>
      <ul>
        {inspections.map((inspection, index) => (
          <li key={index}>
            <h3>{inspection.name}</h3>
            <p>Installation Type: {inspection.installationType}</p>
            <p>Construction Year: {inspection.constructionYear}</p>
            <p>Company: {inspection.company}</p>
            <p>Type: {inspection.type}</p>
            <p>Diameter: {inspection.diameter}</p>
            <p>Material: {inspection.material}</p>
            <p>Coating: {inspection.coating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
