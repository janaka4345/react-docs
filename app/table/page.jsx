export default function Page() {
  return (
    <>
      <table>
        <caption className="bg-white">Books I May or May Not Have Read</caption>
        <tr className="bg-gray-500 text-white">
          <th>Author</th>
          <th>Title</th>
          <th>Year</th>
          <th>ISBN-13</th>
          <th>ISBN-10</th>
        </tr>
        <tbody
          className="[&>*:nth-child(odd)]:bg-gray-200
[&>*:nth-child(even)]:bg-gray-600"
        >
          <tr>
            <td>Miguel De Cervantes</td>
            <td>The Ingenious Gentleman Don Quixote of La Mancha</td>
            <td>1605</td>
            <td>9783125798502</td>
            <td>3125798507</td>
          </tr>
          <tr>
            <td>Mary Shelley</td>
            <td>Frankenstein; or, The Modern Prometheus</td>
            <td>1818</td>
            <td>9781530278442</td>
            <td>1530278449</td>
          </tr>
          <tr>
            <td>Herman Melville</td>
            <td>Moby-Dick; or, The Whale</td>
            <td>1851</td>
            <td>9781530697908</td>
            <td>1530697905</td>
          </tr>
          <tr>
            <td>Emma Dorothy Eliza Nevitte Southworth</td>
            <td>The Hidden Hand</td>
            <td>1888</td>
            <td>9780813512969</td>
            <td>0813512964</td>
          </tr>
          <tr>
            <td>F. Scott Fitzgerald</td>
            <td>The Great Gatsby</td>
            <td>1925</td>
            <td>9780743273565</td>
            <td>0743273567</td>
          </tr>
          <tr>
            <td>George Orwell</td>
            <td>Nineteen Eighty-Four</td>
            <td>1948</td>
            <td>9780451524935</td>
            <td>0451524934</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
