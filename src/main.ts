import './style.css'
import { Product } from './counter';

document.addEventListener('DOMContentLoaded',() =>{
  async function getData() {
    const url = "https://retoolapi.dev/VI2TUL/data";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error: any) {
      console.error(error.message);
    }
  }
  
  
  function displayProducts(product:Product){
    let tableHTML = `
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.rating}</td>
              <td>{product.status}</td>
            </tr>
        </tbody>
      </table>`
  }
})
