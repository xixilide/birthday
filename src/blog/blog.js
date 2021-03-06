import React, { PropTypes } from 'react'

class Blog extends React.Component {
  render () {
    let styles = {
      root:{
        margin:'20px 10px'
      },
      p:{
        fontSize:'1.5em',
        lineHeight:'24px',
        marginTop:'20px',
        padding:'0 10px'
      }
    }
  return(
    <div style={styles.root} className="blog-cotainer">

    <p style={styles.p}>      还记得第一次相遇，你还留着短发，眼神明媚，纤尘不染。
      突然觉得和你做朋友应该是一件很轻松的事情，因为你满脸写着简单两个字。
      我们因为什么原因成为了无话不谈的朋友，其实我都忘了，只是觉得自然而然的亲密。
    以至于三年来，出现在我生活里最频繁的人变成了你。我们成了彼此最好的陪伴。</p>
  <p style={styles.p}>       我出去逛街，出去游荡，
  出去兼职陪着我的几乎都是你，每一次拍的照片里都有你,所以大学里形影不离形容我们也不过份
  尽管我们也会有矛盾，会有争执和意见不和，因为追求不一样，性格不一样，我们不可能所有事情都做到同步
　　，我们也会有各自的朋友圈子，我承认我有时候有一点绑架，想绑架你的思想，，绑架你的进取心，能少宅一点，
生活更丰富一点，眼光更高远一点。</p>
  <p style={styles.p}>     但是我更应该尊重你的生活习惯和性格方式。好像现在才明白也不算太晚，但不得不承认你还是被我影响了一点点的。
但是我的出发点是好的，只是方式有一点强势。因为我们是闺蜜，所以才应该接受对方所有的优点和缺点，
但有时候你也能发现，如果两个人的价值观，世界观
差距太大，是没办法做朋友的。但幸好，我们没曾被任何东西影响，也没差出太大的价值观，我们大部分都是特别合拍的。
</p>
  <p style={styles.p}>　　还剩不到一年的在校时间，有时候，我也很忏愧，自己天天上培训班，几乎腾不出时间陪你上课了，
    能留下的回忆也开始一点一点变少，真害怕，有一天起床就看不到了，期待一个假期也见不到了，
    各自上班后也很难抽出时间一起玩，但无论什么时候你要是去北京或是去张家口我一定带你吃喝玩乐。

</p>
<p style={styles.p}>      你的阳光罐子我一点会好好珍惜，但其实你给我的阳光才多呢，一直想准备一个特别的，连金钱的买不来的特别
      的生日礼物，无论何时，想我了你就可以打开看看，这可是我秘密谋划了一个多星期，每天一点点为你做的专用网站
      哦，所以我觉得感性的你也一定会喜欢啦。可惜我的技术还不够精湛，不然一定做的更完美了。
</p>
    </div>
  )
  }
}

export default Blog;
