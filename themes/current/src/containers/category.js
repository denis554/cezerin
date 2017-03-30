import React from 'react'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'
import Products from '../components/products'
import ProductsSidebar from '../components/productsSidebar'
import ProductsSort from '../components/productsSort'
import config from '../lib/config'

const CategoryContainer = (props) => {
  const {products, categoryDetails, settings, productsFilter, products_has_more} = props.state;

  return (
    <div>
      <Helmet title={categoryDetails.meta_title !== ''
        ? categoryDetails.meta_title
        : categoryDetails.name} meta={[
        {
          "name": "description",
          "content": categoryDetails.meta_description
        }, {
          "property": "og:type",
          "content": "article"
        }
      ]} link={[{
          "rel": "canonical",
          "href": categoryDetails.url
        }
      ]}/>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {categoryDetails.name}
            </h1>
            <h2 className="subtitle">
              {categoryDetails.description}
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <ProductsSidebar {...props} />
            <div className="column">
              <MediaQuery minWidth={768} values={{width: config.default_screen_width}}>
                <div className="columns">
                  <div className="column"></div>
                  <div className="column is-4">
                    <ProductsSort defaultSort={settings.default_product_sorting} currentSort={productsFilter.sort} setSort={props.setSort} />
                  </div>
                </div>
              </MediaQuery>
              <Products
                products={products}
                addCartItem={props.addCartItem}
                settings={settings}
                loadMoreProducts={props.loadMoreProducts}
                hasMore={products_has_more}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CategoryContainer
