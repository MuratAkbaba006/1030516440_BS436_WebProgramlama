const React =require('react');
const {mount} =require('enzyme');
const {Game} = require('../src/client/Game');

test('kartlar',()=>{
    const driver=mount(<Game/>);

    const cards=driver.find('.kart');
    expect(cards.length).toEqual(3);
})

test('chose card2',()=>{
    const driver=mount(<Game/>);
    for(let i=0;i<1000;i++){
        let card=driver.find('.kart').at(1);
        card.simulate('click');
        card = driver.find('.kart').at(1);
        let srcName=card.find('img').prop('src');
        expect(srcName==='tina.jpg' || srcName==='kopek.jpg' || srcName==='zurafa.jpg'||srcName==='' ).toBeTruthy();
    }
 
})

test('chose card1',()=>{

    const driver=mount(<Game/>);
    for(let i=0;i<1000;i++){
        let card=driver.find('.kart').at(0);
        card.simulate('click');
        card = driver.find('.kart').at(0);
        let srcName=card.find('img').prop('src');
        expect(srcName==='tina.jpg' || srcName==='kopek.jpg' || srcName==='zurafa.jpg' ||srcName==='' ).toBeTruthy();
    }
 
})

test('chose card3',()=>{
    const driver=mount(<Game/>);
    
    for(let i=0;i<1000;i++){
        let card=driver.find('.kart').at(2);
        card.simulate('click');
        card = driver.find('.kart').at(2);
        let srcName=card.find('img').prop('src');
        expect(srcName==='tina.jpg' || srcName==='kopek.jpg' || srcName==='zurafa.jpg'||srcName==='' ).toBeTruthy();
    }
   
})

test('select false answer3',()=>{
    const driver=mount(<Game/>);
    for(let i=0;i<50;i++){
        let card=driver.find('.kart').at(2);
        card.simulate('click');
        card = driver.find('.kart').at(2);
        let srcName=card.find('img').prop('src');
        expect(srcName==!'tina.jpg');
       

    }
   
})

test('select false answer2',()=>{
    const driver=mount(<Game/>);
    for(let i=0;i<50;i++){
        let card=driver.find('.kart').at(1);
        card.simulate('click');
        card = driver.find('.kart').at(1);
        let srcName=card.find('img').prop('src');
        expect(srcName==!'tina.jpg')
    }
   
})

test('select false answer1',()=>{
    const driver=mount(<Game/>);
    for(let i=0;i<50;i++){
        let card=driver.find('.kart').at(0);
        card.simulate('click');
        card = driver.find('.kart').at(0);
        let srcName=card.find('img').prop('src');
        expect(srcName==!'tina.jpg')
    }
   
})
