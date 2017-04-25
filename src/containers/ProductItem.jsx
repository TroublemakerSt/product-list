import React from 'react';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: this.props.size,
      color: this.props.color,
      thumb: this.props.thumbs,
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleSizeChange(event) {
    const select = event.target.value;

    this.setState({ size: select });
  }

  handleColorChange(event) {
    const color = event.target.value;

    this.setState({ color, thumb: color });
  }

  handleAddToCart() {
    this.props.onAddToCart({
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      thumbs: this.state.thumb,
      size: this.state.size,
      color: this.state.color,
    });
  }

  render() {
    const { name, price, thumbs, size, color } = this.props;
    return (
      <li>
        <div className="cd-single-item">
          <a href="#0">
            <div className="cd-slider-wrapper">
              <img src={`img/${this.state.color}.jpg`} alt="Preview image" />
            </div>
          </a>

            <div className="cd-customization">
            <select defaultValue={color} className="color" onChange={this.handleColorChange}>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
            </select>

            <select
              className="size"
              onChange={this.handleSizeChange}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>

            <button className="add-to-cart" onClick={this.handleAddToCart}>
              <em>Add to Cart</em>
              <svg
                x="0px"
                y="0px"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <path
                  strokeDasharray="19.79 19.79"
                  strokeDashoffset="19.79"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeMiterlimit="10"
                  d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"
                />
              </svg>
            </button>
          </div>

          <button className="cd-customization-trigger">Customize</button>
        </div>

        <div className="cd-item-info">
          <b><a href="#0">{name}</a></b>
          <em>${price}</em>
        </div>
      </li>
    );
  }
}

export default ProductItem;
