import Utils from "../../services/Utils.js";
import ArticleProvider from "./../../services/ArticleProvider.js";

export default class ArticleShow {
  async render() {
    let request = Utils.parseRequestURL();
    let post = await ArticleProvider.getArticle(request.id);

    return /*html*/ `          
            <section class="section">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Miles_per_Gallon</th>
                            <th>Cylinders</th>
                            <th>Displacement</th>
                            <th>Horsepower</th>
                            <th>Weight_in_lbs</th>
                            <th>Acceleration</th>
                            <th>Year</th>
                            <th>Origin</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <tr>
                            <td>${post.Name}</td>
                            <td>${post.Miles_per_Gallon}</td>
                            <td>${post.Cylinders}</td>
                            <td>${post.Displacement}</td>
                            <td>${post.Horsepower}</td>
                            <td>${post.Weight_in_lbs}</td>
                            <td>${post.Acceleration}</td>
                            <td>${post.Year}</td>
                            <td>${post.Origin}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <p><a href="/">back to home</a></p>
            <p><a href="#/articles">back to all articles</a></p>
        `;
  }
}
