import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    // création de données blog
    const blogs = [
      {
       id: 11, 
       title: '10 Signs You Should Invest In Internet', 
       describe: '11111111111',
       tag: ["web", "internet", "tech"], 
       content: 'Even though using "lorem ipsum" often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. "Lorem ipsum" also approximates a typical distribution of spaces in English.', 
       createdTime: '2017-06-07 16:17:41', 
       viewCount: '2', 
       author: 'admin' ,
       image: '../assets/images/f1.jpg'
      },

      { 
        id: 12, 
        title: '14 Common Misconceptions About Internet', 
        describe: '222222222222222', 
        tag: [], 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis feugiat urna, consectetur pellentesque mi commodo ac. Curabitur non ante at diam dapibus maximus id in risus. Nulla consequat dignissim metus id suscipit. Morbi in risus sodales, sagittis nisl vel, finibus nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in metus nunc. Nunc fermentum lectus eget risus finibus ullamcorper. Suspendisse turpis orci, condimentum mollis purus non, tempor facilisis libero. Morbi quis augue sollicitudin, mollis nunc sit amet, fringilla risus. Integer vitae lectus ut nisi posuere placerat at eu purus. Vestibulum vitae erat ac metus suscipit volutpat. Duis sagittis feugiat metus. Sed sed faucibus lacus. Nunc non arcu sed leo volutpat tempus.', 
        createdTime: '2017-06-06 16:17:41', 
        viewCount: '2', 
        author: 'admin',
        image: '../assets/images/f2.jpg'
      },
      { 
        id: 13, 
        title: 'Why We Love Internet (And You Should, Too!)', 
        describe: '3333333333333333', 
        tag: [], 
        content: "Mauris a nisi vehicula, malesuada libero eget, dictum sem. Cras sollicitudin sed purus sed hendrerit. Nam scelerisque, tellus eu eleifend rutrum, dui odio venenatis est, et consequat lectus arcu in felis. Vestibulum ut pulvinar quam, in lobortis nunc. Duis consequat mi in sem pretium, eget placerat orci tempor. Nullam egestas justo quis ullamcorper ultricies. In sed erat ornare, dapibus mi a, pellentesque quam. Maecenas eget facilisis turpis. Etiam lobortis convallis mi in lobortis. Cras pulvinar volutpat facilisis. Donec nisi purus, rhoncus et mattis non, dignissim quis risus. Integer blandit rhoncus massa, eu congue turpis placerat quis. Cras velit justo, ultricies aliquam pharetra sit amet, scelerisque sit amet arcu. Donec fringilla bibendum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nunc est, lacinia eu enim vel, cursus consequat nunc.", 
        createdTime: '2017-06-07 12:17:41', 
        viewCount: '3', 
        author: 'admin', 
        image:'../assets/images/f3.jpg'
      },
       ];

    // creation de données comments
    const comments = [
      { id: 11, image:'../assets/images/2.jpg', postId: '11', createdTime: '2017-06-01 12:17:41', content: 'This shot has navigated right into my heart.', reviewer: 'Laura' },
      { id: 12, image:'../assets/images/3.jpg', postId: '11', createdTime: '2017-06-02 12:17:41', content: "Mission accomplished. It's fab mate.", reviewer: 'Joseph' },
      { id: 13, image:'../assets/images/2.jpg', postId: '11', createdTime: '2017-06-03 12:17:41', content: 'Tremendously sleek.', reviewer: 'Laura' },
      { id: 14, image:'../assets/images/3.jpg', postId: '11', createdTime: '2017-06-04 12:17:41', content: 'This is new school.', reviewer: 'Joseph' },
      { id: 15, image:'../assets/images/2.jpg', postId: '12', createdTime: '2017-06-05 12:17:41', content: 'My 53 year old daughter rates this shot very exquisite :-)', reviewer: 'Laura' },
      { id: 16, image:'../assets/images/3.jpg', postId: '12', createdTime: '2017-06-06 12:17:41', content: 'Revolutionary shot m8', reviewer: 'Joseph' },
      { id: 17, image:'../assets/images/2.jpg', postId: '12', createdTime: '2017-06-07 12:17:41', content: 'Slick work you have here.', reviewer: 'Laura' },
      { id: 18, image:'../assets/images/3.jpg', postId: '13', createdTime: '2017-06-08 12:17:41', content: 'Just cool :-)', reviewer: 'Joseph' },
      { id: 19, image:'../assets/images/2.jpg', postId: '13', createdTime: '2017-06-09 12:17:41', content: 'Nice use of light in this spaces!!', reviewer: 'Laura' },
      { id: 20, image:'../assets/images/3.jpg', postId: '13', createdTime: '2017-06-20 12:17:41', content: 'Everything feels nice.', reviewer: 'Joseph' }
    ];

    return { blogs, comments };
  }
}
