import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientsTable({ingredients}) {
  return (
    <table>
          <thead>
            <tr>
              <th colSpan="2">Ingredients</th>
              <th>Number</th>
              <th>Add to list</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map(({ measure, title, _id, thumb }) => (
              <tr key={_id}>
                <td>
                  <img src={thumb} alt={title} />
                </td>
                <td>{title}</td>
                <td>{measure}</td>
                <td>
                  <input type="checkbox" name="shoppingList" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

IngredientsTable.propTypes = {
    ingredients: PropTypes.array.isRequired,
}