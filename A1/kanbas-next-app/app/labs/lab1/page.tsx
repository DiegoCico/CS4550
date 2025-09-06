export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
      
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
      This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag  </p>
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
        </p>
        <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists">
  <h4>List Tags</h4>
  <h5>Ordered List Tag</h5>
  How to make pancakes:
  <ol id="wd-pancakes">
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients.</li>
    <li>Stir to combine.</li>
    <li>Heat a skillet or griddle.</li>
    <li>Pour batter onto the skillet.</li>
    <li>Cook until bubbly on top.</li>
    <li>Flip and cook the other side.</li>
    <li>Serve and enjoy!</li>
  </ol>
  My favorite recipe:
  <p>How to make fried rice with rice cooker</p>
  <ol id="wd-your-favorite-recipe">
    <li>Clean rice and put it in rice cooker.</li>
    <li>Put frozen veggies in rice cooker</li>
    <li>Put chicken in rice cooker</li>
    <li>Put your seasining in rice cooker</li>
    <li>a littler bit of soy sauce and cook it</li>
    <li> once done wait a couple minutes and it is done</li>
  </ol>

  <h5>Unordered List Tag</h5>
My favorite books (in no particular order)
<ul id="wd-my-books">
  <li>Dune</li>
  <li>Lord of the Rings</li>
  <li>Ender's Game</li>
  <li>Red Mars</li>
  <li>The Forever War</li>
</ul>
Your favorite books (in no particular order)
<ul id="wd-your-books">
  <li>I dont read books</li>
</ul>
</div>

<div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet: <br />
  <img id="wd-starship" width="400px"   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAACUCAMAAAB4Mk+VAAAAt1BMVEX///8lLz7/mQD/lwD/lQAiLDz/kwAfKjoaJjcXJDX/kQAVIjTu7u8zO0gdKDnh4uNaYGkNHTAAACEAFSvLzM//+PLa29329/fAwsXn6On/jAAADycAAAAAAB0AABoAABaeoab/yY9DSlZma3OLjpQAABCxs7enqq6Chox0eH9LUVz/8+f/pT//3r7/797/rVP/1Kv/t27/5s3/wID/z5//tWT/mx4WFyv/oTL/pEj/uHf/rmP/rEnIGgLfAAATWElEQVR4nO1cCXeiSBBWOQVREQTUTIJAUPGM1zpJ/v/v2gaVroZuIImTTOal3tt9u7Ft6uuuuwprtSpkp1Rp+VdRwmGrdQM+7VbHcibB1O9GkedF3WkwcaxO6yZc3pRsxKc762qSahhq3fOD8P18tszQ9b12rzfS9WazKctNtGmvp3oz1+kwHj/oXGhQeuTXpYNy9lolu1ph0NURm2pbEhBJso74lGM+rdK9s1yFge/pI10S6hkS2vqo3g1M2rcm3Sv5s0nh/iaSoevSoJg7Cy/tuhTgzjRSjSaVTyGahoPqoGvWLNJ0vZ3dCu/ZNLRZ/s6tKBaMhFRdDwse0NEMNV1q+EW8dSJDv67V5dwRWTNNl5l8yno9Cqpqu9NVm+3c+WVIUqXcjZoeOKr2fcEjpjrcS3cLlro9gEPP4LYDxEchn0JbbTsVQNuO9qCWYL7s+NDNXHnLh9/8xX5cyyNkSZ+xdbylgduUI/KJltYru5+Y0bsi0bvAnt4xpSZHIy1z/FOIW58xn+JoBLtyxNZw6w5uOSUOyDGq3ZCklSp5+FAZdcyHR55/WAd42h7zKS5pOoQ6WzTcEXweoVphgQUiSSi98Fm1E0wZ8YkLGHhA2YQ68xZJ9UaCwzb+XcCQ5EEvEtaLNRtQ2y3D7VeX8oTUgPx6E3yWN3zX4/Ezp2tMmTb3HiwjTtnUaKwKbYlikt+KW5DaMnI0KnJLKqJmO3fCAmksJ/AiVZaCm15mH9ljBEI18xEuA+wPuqTMoGhFRVzWNU2rt2NemzKOPd6EW1L1uhf504ljmpZpOmEw63qCnmGZtMUDqI3NLsNMhxkxR7uwVCIw8CJJA2IO3Vt8xlLko/DsIjZ2xwynfqSpF26r45Z0Q0OQLZJz25qgMIFkeURcuAfkhVRHsAsEc6Yey/BEhBfD2mDJ8PwlvTvJm+yBE8y0kfwG3GpPm00cqvG3TZ88aWMGdZMwvzJdwXPqzVbwFnQQzSn+YEo8p+4yHFXLdL2R3lZL7TkyTILR64ZWQSRBiphgwGcOoLs1AuoGlpYzE5JGx+1AT9XE4mPDeEWqF+UCVujXZ6Wh6uTurjftFC+zSeCkjELnotIDb5MUmITu6Rc2hWb2P/x3hzDzU+p3Mb+tChG6VSF1a82gjjcj+FkABFCoUxUc6wK+tF9USbS7ADeM/yAD7YjlDG5ODiGpRAJCXCYVje1fmRbwNvSg1oIO7wEcInx+kx0P35psIqx7hOc9gCmHQcsBW5KUfpzeuCTQngPjXmGE97JhaAK9+p+mCXwwoeCEk2p2KWprpaHIg4Ut+yNNBwMgzrqP/96Bj1erpJk3IsIkk3YlhM7ZoFiLVL2FHlD1HoX7FhSre7DAIsz8J+KuReDJahd+YkFBp+XgaaaBEjZsDXSKz4N1DEkGomNB89Isz65vR9DQtgmDbsNki2auUtc7Cmqd1O2Rm5wpJHYCitCB9y2XuLGbUkCkh8RHE/hRPae2nTSy+WXWWsC250yBDX0iaUQIu9b9xLI+TLwEMtgisq37nIJPrmAkaYBCoFTZ87WHAci9JbK0oxF5/icKesjG3eqCJLyXCyFTE67G6ZqT7iPnFNwS8LVmSnBE4FRUpro1OQRuMpifAtykzYtJw+ptx9WD683ls3UHhEAjl/go/AVwo4jx04CbBbgdmETpmS9iU5x4Lqzg2VopkXtLWkYLYDkCGUXDvTE+FhXhtqGCjzIhelpSvGhsCi4HzQZK3MxmODMyhRceIvNT2nZFuIniZLYnkH52SdbCtByWXTkApd1mVvktI1NFa45Q8vznDbsJzjuHGyqmTCo4zrAusTu2/nqm9hDiXfLG3iYKD+eD7HnT8FaK3jFD1w2CwHUnoQk2LbxvWBWQPOJDnGEZZ0uPrX82W/d11ibnjfLl1Lbejmbuh6G33JmnxX5WlmUJJVGapqFtzUEp7lqkgg+Jq0ozrFSdU8EnyoaIoJj7tRxNckW6+GmyKtW7rKpTFeoE6qOhtoELjTvLbdXoPdxHgVnkx0g3I7nwk9SMpanaJLVeZDBvAdwGLfWY0oAn2I1HzX2Xrtum/zBid9zU0T3UrjzuFlBwIkTHlZrUXZvYoRPdbRfDEv6jgWjNGMARtUePnltQI6STNf2Vq3AXUB63DSJMGXZNrbQunFYLbO+KWyXq7SDzyQc/Z+DTom6oPJL9N5k5e+KxD7Ia7toEXzjhl52r3gC1TwFKAjihFmiZsjrKtlvYEBV0I3Ir197smfTGHhkFtwVODvplnJRgC40F+h4YNhj03TF11fEK1BGRrEe00RAaRXqFVnoZ7gHITUDTupXm5jK20NiAwSA8KBXz845Br5hfhLySdZcomo0MudRutyVJoD6CghumziBd6qQFFFheSZfCijTorDKbSOdHTTVJLWqE6w/lhahWNwtbUHVd0DTPiyJP05DK6Gq20UrBXXMw24Keiq+V7g7D9ui6FpRMsQFE3y/R0VY8bmawlVN4LANuBxnYkiH5gRvGHVHLMh0ndINZV1NHxFNouAHfoKufhp7CCKzFxUVcIgeTIJnZAirfZjiNdIN164JUAtzJdK6MemBmtaPVMR30FFjwoOCGVba0NGan3luGpSlcWMYK7uKvFwxDwAdaTqD9MugjECWVCbL/gxRrxop6bKswXqvBMAz5p8vZ2dr1RgxYC7Tl692mCg44EQR6N5nC1MCc1u+ot57NeUhyyBwnXyPC1CrKx2KCLZ7Hy2njzJIwNTbuHlyrFEBNGM1FFlmBZqi5KUvBKDi8lk9cd6F8leKGBvkqvjhsfySW4ijnau4cvD2jmVxA1tQT1AzyIiNB5vJGYVm6HLebd8Cp8JItVNg9cC9fxi3TbBmmCg1CX4UTRrEhZV840dZmj9okVI7bAplc7/wnFXQMIHVSc3qpUoDBx3zZrRK1wohU2hFbbCJ4RJkCZpY6pbhhjfsxOWw7tduZZhhWMMlL7A9uo7CHosrI8gngMnOKsAXFnNGyT6mwznQm4MnOh52azWwkYqchunCuPZh4nEGo5MVo1OkS6VWPZdEHsDarZmduMxSW+THolpGwxn9ID0LNDnhhM3ae9cMVZEr7qDIRHcrUqeSInBkpGBFOOAMJIAN3DRRd9HhFykZuHAA3PpOeso1rZ82CnKSUiOiTPklSI3LmMkdPzjWy7gS4xbg3P0hDTyPLArZjauxvWlgzRx/pfRFjzz2XsYow5yVe064ygOvgC1enIKPOFhBr4Gba8awfkLzeR7oBFuzSMw01MXJXgps4SZYNHODgIfZPaUZNsR3p3IgQj0zjILVglrsCDWCXvhruEjmfkvUdemiB0xDkn6za7OomKcOJuHsQd7qwF2MKZyUicDOz+BDKuVqY/JmZvI2xJd5RqIedNORW864Jt1GQQQXDvQ8fanoRcv7AcsyEPS/M3LJ5G2uSysIXpwepauQagDGlwtD2OnimoBl9qONFaCPzCDvQfwtFL+G4mXorK6YaYIuuzoLr2cu04a5JKpGGiYPUkqCxjKAfk+qsVTYR11FH7s7kypnsvsmaMAHphYfL5JSmT83EkuGmK3NN5LcREbcUvOVDdNqkNkvQ3ezoPXPQnJwAuFKb6irSkqWg4fNklUIHgVt+IjahjQXFxYC4cJWuW2i3PBbWi29wMie9ebr1xyvx9iNW7ds3mro2KdF9H2qj7LHjXYucjx5RpLflaLReCjOaz744VM9NAV1pkh/OFlgTmIPYTrd/jaYWc8LatjTiFossBTGIhMjomuSgkhV2R1ddIKtYrIH+MC/otAG9GpHFXKnJOs3B2T/FLwi4jkW5yIEZ6ISkqYWFxUlmhkDXgvAyg2/H71d7v3AhjGy7s8o4neybQ/SBzJjyL+wxY6dB6pebI92LC92m1WnFb7vbdiueVPAlcgxEaBdms50oo47o693ZbDqdzvyoboD3bnXPIm+c2qGu0d5H+8WwSFEzs1Bgpt4DEI8Ism4YdS/q+rOYfL/rNUfZ6ppa8qKFm1NHQVbPRDRJdM2quZkRMvqOk5xhuy/1eRdqeyzZhLjPXErxW/nN5B03Of/Kers0iZ9V6nvrMUcDUtLv6Ft3srhljfFo6z6zkjbcccX9po6t1Cttgw+ykk6F7Sf2JiRmHh4ZYWCWRWai18q+7lmgk35WJ4pILSmZJWRlX4vLkTSanq8WRKF1mWWtcuLLTA9sP/tkdqUrzE6vsUnQo0pBn+nlBsMIMqQ0XnDSG9I1ZnedeKEs9j3MDCvjwVkWIyH3oeIgimxQfo+BSpZfMDXS7PnwHc3Lw3vdAgUiNUdnW1aTDATvCytMZrfSrxL0tLByJmu7PcZ8S/tBcwi2kxK1fFc4SmHeJT8ucib5kS10rVkPzxUIeq+ES7P72Cv+FQpp9FD5Ny0SGszqcqa7L7SbspDXFF+VS4egHS/dRfOKmj4DHzyQ9S4xIHsSaQL9JzgEqanWvaqjLYCFoOvV49kGNflNEkPXIp/6ky1OEJZvPrAuVIalZZkXqlg1H4SzbqSpiFH5KlVSG/Hb9rpT8301Cyt0UZh2/g2a4B2/fPNZZMe/pITiSU9DtyzFMoX4nXxoKttuDTodq8ovCX012YNEUhwH/csq/42kH/qhH/qhH/qhH/qhH/qhH/qhH/rT1E/pqzn5HOrPV9vtZr87vC5iej08jffL1erfRr9abnbrhjJUFEXkExJFUVGG4ulpv5x/NXd/iFYIM4fwclwjR7yoNF42/+KlL59+N3ieAvlKnMjvzsD/IfibI/2eM8i3aOnqNGz8Gzff33DDMswJKUu0eqw0uOF6+/2RL9cKXwU1wr1HyzdD9F8i97z8ar4/Rv1xQ6yGGuEeoy/M10oi86fn1Vfz/hHaYRHnOC72W8hxKYkjyyl8gru2SoAj5Ivx9xX21RGB43jko4dDpXE8oThlN07osIgdOZfHXesfzn/mxOP+2yJfoIs9vj6jmGyew9BfjTkRIE/0O6bd5a+cctx/13BmVcz4/oiBK6ktGx8vppAfLjbfWs+ZtAe4t+lfN4urNeTF9be98yJaLa7AuQa42W0KvMFz690/iHx99e78Akr0fKE0MPLTv4c8xS0+kdh2wOZxonL4x5LVFPfFjWHanEDIw4nD9ffOVckSS399vVU+F5pu1zCDQ3f+uv+2gTtKw3d7bLhr898XaNxpm1s8h7IeH41yev6Wydp2vEYhqnLCV7s9XZDxLxQp7i+HZFKDgrj1+Lt59M3hdK49iEf8t2vgIu6o35mfyGAWRb38cf2NsrX57sSl6jpMhXV3sV0ct2F8MQ3egLwPld130PT+fHOCSQgvpp88X0Bxv5nSu1yLuboFpyivm78c+mq544jaAyfu08+ubox/Ym8wH4uU0gWvNJ7/Xuir5f5VJFWU57GnXl7Vm2eJ+XnZQqGUqjhRPD2N827gy2m+2a2P2TKTeAIQ95dolDsWXxzyaNRqFTIZp7/MwPc3h9/HfO1YWQMu508Xs6Y8l223pV55DJ3j0bX/Jbc+369FSimJ48lodHsV82GFK9ud8vYtlfihcthQahufSP35aoysN00seX5N4ttcxFxcV9l5+3RkFylRGKssxsvtl8Tw/dV2s2OAjkuFmYJZ/3AV84piulwzhP0qTeLxMP5sI49Md9z2YwmjKOZM7+qiCOK6KqfzTaMIeYxd5BYvz5+VwKyW4+f1iReZLTBu+Jpn5WLNOfENced8NyxGHhs6njsufj/94dLcan9YnI7xw5j8cMqRlkddItBsxaGE5ofCDuMVfKzw/Gm3XN1+tmC+2jyd+KQHUMQIxx93tGevhuePj29NM2IDV6nlhjR+OOQWT/vlFhn7j+LvI5ONlPl5gbwHW7LTZyNbQxe43VnM+WyhpQItnysiT8CLylA5vsajFQn+N+NFcLfL5X78hKKwKpAbiYQze3xn580t3qOG/Tjor4r8il5RUHT38rwb7/eb5XZbOF9yBrvZ78e73dP69STSm1ss1OJuydp8edZupTAyL2Bs+1xm4SgMITMk8iKSleNpsfi9fnk5HJ52l97VmXYI59PLy8v6929kthpxT48vsl0UEoeHAn/ylOBWDu+DHdPq8Hbk6QHExF/p/H/JP8Sf3gT3srMyZOj1hemkY8A3PmRt+uNFBeP+eYROrazWP46vm+c+6mP7+5cjPVf7fEqqfyU+ef6CmOXf7MJoyJe7hfL1l4585mm3KY1E4ooDd6sO92qzVt6r6TdCXbHw1Y8HePjbFcPn2x03/DJx54eNXbVMcL7mueFty8H9zQJFpu+wwB+iuOyhLJjOOsfk87Bx+xrJfL8+cZ9o4BHm4+KlXKkJHm+OOqHVfvfaqBRKfhi0iMz389tA/1FabcZrnlkHuA3xinJE6c5fVdGsxWZuc2gw6j4fJpThDlGC+zUlrVLqz7fjxXB443tPcrvD5g8k9bel7X59PJ6j7Y8BPkfzx9Nh/7fJNpNWm6eX36djnFe9B30yZ8kdF+vD+K/T51JabTdjlEefjiiLrog/yVlFhUee6nm3X/61rbhymieVhN3TYXHkz1Oy5zMgib/M0IqN0/ppt1kiA/Z9IQPqX+pGSACeD+vX0zG+XPFMfDJEG1dk4pLUDWpyfyn1qfTpbPwPUpC/jcOLldcAAAAASUVORK5CYII=" />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="./labs/lab1/Unknown.png" height="200px" /></div>

  <div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" value="123@#$asd" id="wd-text-fields-password" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" placeholder="Doe"
           value="Wonderland"
           title="The last name"
           id="wd-text-fields-last-name" />
    <h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

<h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />
<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>

<h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>

<h4 id="wd-dropdowns">Dropdowns</h4>

<h5>Select one</h5>
<label  htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
   </select>

<h5>Select many</h5>
<label  htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select multiple id="wd-select-many-genre">
   <option value="COMEDY" selected> Comedy          </option>
   <option value="DRAMA">           Drama           </option>
   <option value="SCIFI"  selected> Science Fiction </option>
   <option value="FANTASY">         Fantasy         </option>
</select>

<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
       placeholder="jdoe@somewhere.com"
       id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
<input type="number"
       value="100000"
       placeholder="1000"
       id="wd-text-fields-salary-start"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range"
       value="4"
       max="5"
       placeholder="Doe"
       id="wd-text-fields-rating"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
       value="2000-01-21"
       id="wd-text-fields-dob"/><br/>

<h4>Anchor tag</h4>
Please
<a href="https://www.lipsum.com" id="wd-lipsum">click here</a>
to get dummy text<br/>
  </form>
</div>


    </div>

);}
