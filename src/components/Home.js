import bruce from '../bruce.png'
export default function Home() {

    return (
        <div className="homeBanner">
            <h1>WE ARE LIIIIIVE!!!!!</h1>
            <img src={bruce} alt="bruce" height={400} width={800} />

            <div className='h3'>
            <h3>From a github pages server somewhere, this is the moment I personally have been waiting for. An ugly demonstration of what can charitably be described as a minimum viable product.</h3>
            </div>
            <div className='h4'>
            <h4>Click around to the pages to see stuff, and check the about page to learn more about what this project is</h4>
            </div>
            <div className='h5'>
            <h5>This site is best viewed on desktop or in landscape mode of your mobile device</h5>
            </div>
        </div>
    )
}