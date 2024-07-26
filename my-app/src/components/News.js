import React, { Component } from 'react'
import Newitem from './Newitem'

export class News extends Component {
  artical=[
    
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Maeve Reston, Ashley Parker",
            "title": "How Trump crushed Haley's momentum — and came closer to clinching the nomination - The Washington Post",
            "description": "The former president and his allies trained their allies on the former U.N. ambassador in the week before the N.H. primary, which Trump won easily on Tuesday.",
            "url": "https://www.washingtonpost.com/politics/2024/01/23/trump-haley-new-hampshire-republican-nominee/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5OAMLO5J3E5SYFNOHEC4ED3EN4_size-normalized.jpg&w=1440",
            "publishedAt": "2024-01-24T06:05:00Z",
            "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nNASHUA, N.H. Donald Trump and his team had a singular mission as the Republican primary shifted to New Hampshire: Destroy Nikki Haley.… [+18876 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "DENIS POROY, JULIE WATSON, JOHN ANTCZAK",
            "title": "San Diegans cry, hug outside damaged homes after stunning flash floods in normally balmy city - The Associated Press",
            "description": "Flash floods that raged through parts of San Diego were spawned by a torrential storm that produced the city’s fourth-wettest day on record, in stark contrast to its image as a balmy seaside playground. The National Weather Service says the 2.73 inches of rai…",
            "url": "https://apnews.com/article/san-diego-flash-floods-rescues-record-rain-bd573dd4b66dac908a4c0be5e9ab1bee",
            "urlToImage": "https://dims.apnews.com/dims4/default/ec492a3/2147483647/strip/true/crop/5729x3223+0+298/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2F02%2Fd22c4e6828c82de9ef515fd3ad9d%2F22a16bfc0a5c4427b6254781809f5e0e",
            "publishedAt": "2024-01-24T01:18:45Z",
            "content": "SAN DIEGO (AP) Stunned residents, some breaking down in tears, pulled soggy and muddy furniture from their homes in San Diego on Tuesday, a day after flash floods from a torrential storm produced the… [+4341 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MLB.com"
            },
            "author": "Brian McTaggart",
            "title": "Billy Wagner five votes short of Hall of Fame election - MLB.com",
            "description": "HOUSTON -- Perhaps it is only fitting that Billy Wagner’s Hall of Fame candidacy is going to come down to the wire. After all, the 5-foot-10 fireballer made a living out of nail-biting moments late in games en route to amassing 422 saves during a career that’…",
            "url": "https://www.mlb.com/news/billy-wagner-falls-short-of-hall-of-fame-election",
            "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/k3txc0nfwybw2xg6knk5.jpg",
            "publishedAt": "2024-01-24T04:42:06Z",
            "content": "HOUSTON -- Perhaps it is only fitting that Billy Wagners Hall of Fame candidacy is going to come down to the wire. After all, the 5-foot-10 fireballer made a living out of nail-biting moments late in… [+4430 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ariel Edwards-Levy",
            "title": "New Hampshire exit poll: Majority of GOP primary voters aren’t MAGA, but most would be satisfied with Trump nomination - CNN",
            "description": "The voters who turned out for New Hampshire’s GOP presidential primary on Tuesday were less staunchly conservative and less closely tied to the Republican Party than the electorate in last week’s Iowa caucuses, according to the early results of CNN’s exit pol…",
            "url": "https://www.cnn.com/2024/01/23/politics/exit-poll-new-hampshire-primary/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240123170005-restricted-voting-booth-plymouth-new-hampshire-01-23-2024.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-01-24T04:05:00Z",
            "content": "The voters who turned out for New Hampshires GOP presidential primary on Tuesday were less staunchly conservative and less closely tied to the Republican Party than the electorate in last weeks Iowa … [+5594 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ariel Edwards-Levy",
            "title": "New Hampshire exit poll: Majority of GOP primary voters aren’t MAGA, but most would be satisfied with Trump nomination - CNN",
            "description": "The voters who turned out for New Hampshire’s GOP presidential primary on Tuesday were less staunchly conservative and less closely tied to the Republican Party than the electorate in last week’s Iowa caucuses, according to the early results of CNN’s exit pol…",
            "url": "https://www.cnn.com/2024/01/23/politics/exit-poll-new-hampshire-primary/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240123170005-restricted-voting-booth-plymouth-new-hampshire-01-23-2024.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-01-24T04:05:00Z",
            "content": "The voters who turned out for New Hampshires GOP presidential primary on Tuesday were less staunchly conservative and less closely tied to the Republican Party than the electorate in last weeks Iowa … [+5594 chars]"
        }
  ]
  
  
    constructor(){
    super()
    console.log("heloo i am constrater");
    this.state={
artical:this.artical
    }
  }
  
    render() {
    return (
    <div className="container my-3">
<h2>newmonkey top-heitlist</h2>
<div className="row">{this.state.artical.map((Element)=>{

    
 return<div className='col-md-4' key={Element.url}>

          <Newitem title={Element.title.slice(0,45)} description={Element.description.slice(0,88)} imgurl={Element.urlToImage} newsurl={Element.url}/>
    </div>
    })}
    
   
</div>
    
    </div>
    )
  }
}

export default News