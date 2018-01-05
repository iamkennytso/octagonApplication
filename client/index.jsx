import React from 'react';
import ReactDom from 'react-dom';
import { Element } from 'react-scroll'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'Hello World',
    }
  }

  render() {
    return (
      <div>

        <Element className="section" name='sec1'>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget purus diam. Sed porta sapien quis quam ultrices volutpat. Sed vel justo lacinia, varius justo vitae, mattis felis. Sed leo dui, sagittis sed urna a, vehicula blandit massa. Aenean euismod porta arcu ac ullamcorper. Integer urna massa, tristique a rhoncus at, commodo vel purus. Nam id diam dapibus, vestibulum eros et, porta mauris. Pellentesque vitae tellus iaculis nisi pellentesque hendrerit id vel turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lacinia sem mi, sit amet malesuada ex commodo in. Curabitur fermentum lectus quis erat convallis sollicitudin. Nulla fermentum vehicula finibus. Morbi non sagittis risus. In vulputate mi lacus, at bibendum mi posuere nec.
          </div>
        </Element>
        <Element className="section" name='sec2'>
          <div>
            Phasellus elementum, massa ac tristique aliquam, ex tellus commodo neque, sit amet rutrum tellus risus vitae arcu. Aliquam erat volutpat. Aenean sed justo vitae augue vulputate consectetur. Aenean condimentum blandit quam sit amet auctor. Aenean euismod, lacus et commodo viverra, massa felis ullamcorper justo, id consectetur libero risus id nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius mi ac urna consequat rhoncus. Pellentesque condimentum mauris et ante vestibulum, ac scelerisque lectus tempor. Sed vehicula aliquam metus.
          </div>
        </Element>
        <Element className="section" name='sec3'>
          <div>
          Maecenas accumsan pellentesque arcu quis vulputate. Phasellus id imperdiet turpis. Suspendisse eget tellus quam. Morbi in tincidunt ligula. Vestibulum commodo, augue mollis dapibus lacinia, arcu neque mollis lectus, id vehicula quam quam sit amet mauris. Nulla vestibulum lobortis eros, quis placerat eros imperdiet at. Sed rhoncus mauris fringilla, hendrerit purus quis, mollis velit. Duis ut est mattis, suscipit tortor eu, efficitur elit. Donec massa libero, blandit sit amet turpis ac, malesuada placerat tortor. Mauris eu tincidunt nunc.
          </div>
        </Element>
        <Element className="section" name='sec4'>
          <div>
          Suspendisse cursus enim ut nunc lobortis, at luctus ipsum semper. Donec fermentum tortor ut libero sodales mattis. Nulla ornare ultricies sollicitudin. Quisque luctus felis quis laoreet tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consequat dignissim ipsum, ac sagittis ex fermentum eget. Sed suscipit nulla eu feugiat condimentum. Ut hendrerit hendrerit risus, sit amet dignissim enim sodales sollicitudin. Praesent ut varius enim.
          </div>
        </Element>
        <Element className="section" name='sec5'>
          <div>
          Proin pharetra orci non eros eleifend varius. Aenean consequat quis neque sit amet sodales. Donec hendrerit diam ut ligula efficitur lacinia. Sed ultricies sem vitae quam pretium, et ornare turpis bibendum. Vestibulum iaculis tincidunt nunc ut convallis. Aenean tellus sapien, fermentum a lacus in, semper viverra est. Aenean id est vitae velit porta accumsan eget eget mauris. Sed lacinia risus sit amet vestibulum mattis. Etiam lacinia augue sit amet mollis ornare. Vivamus eu tellus consequat, eleifend justo sed, interdum felis. In porta consequat sapien non tempor. Nullam convallis finibus blandit. Nulla euismod nisl vel magna tempus, at euismod elit ultricies. Etiam hendrerit dapibus leo at convallis.
          </div>
        </Element>

      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
