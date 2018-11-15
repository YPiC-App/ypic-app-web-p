import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { home } from '/app/urls';

const Page2 = () => (
  <div className="page2">
    <h1>Page 2</h1>
    <p>
      Spicy jalapeno bacon ipsum dolor amet cow mollit alcatra porchetta
      incididunt in dolore kielbasa consequat veniam tongue prosciutto anim.
      Duis laboris beef pork shank elit t-bone tail nostrud fatback in ex.
      Officia kielbasa voluptate jowl anim, ut exercitation landjaeger beef
      ribs. Sed non adipisicing mollit spare ribs culpa pork loin salami dolore
      duis capicola. Strip steak elit cupim flank dolore qui, sunt ut short
      loin.
    </p>
    <p>
      Corned beef proident pork chop anim shoulder tenderloin qui in cillum.
      Tongue salami dolore cupidatat fatback culpa ullamco occaecat andouille
      bacon short ribs strip steak jowl chuck. Pork landjaeger reprehenderit eu
      bresaola excepteur quis magna cupidatat, ham et meatloaf ribeye. Elit
      veniam officia, turkey eu reprehenderit occaecat dolore strip steak et. Ad
      proident filet mignon ex laboris velit flank sed mollit.
    </p>
    <Link to={home()}>Home</Link>
  </div>
);

export default Page2;
