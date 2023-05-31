import React from 'react'

const Hero2B = ({ car }) => {
    return (
        <><div className='Hero2B'>
            <p className='sales--area'>Sales area: {car.salesArea}</p>
            <hr style={{ width: '625px' }} />
            <div className="price--list" >
                <p className='price'>For the price list</p>
                <p className="vehicle">On the vehicle</p>
            </div>
            <p className='description'>{car.description}</p>

            <h2 className="more--details">
                More details
            </h2>
            <div className="more--details--data">
                <div className="second--column">
                    <p className="second--column--mileage">Previous ownership<span className="second--column--mileage__value"> {car.previousOwnership}</span></p>
                    <p className="second--column--mileage">Gear<span className="second--column--mileage__value">{car.gearbox}</span></p>
                </div>
                <div className="first--column">
                    <p className="mileage">Mileage<span className="mileage__value">{car.mileAge}</span></p>
                    <p className="mileage">Engine Type<span className="mileage__value"> {car.engineType}</span></p>
                    <p className="mileage">Gearbox<span className="mileage__value"> {car.gearbox}</span> </p>
                    <p className="mileage">Color<span className="mileage__value"> {car.color}</span> </p>
                    <p className="mileage">Date on Road<span className="mileage__value"> {car.firstDay}</span> </p>
                    <p className="mileage">Test Until<span className="mileage__value"> {car.lastDay}</span></p>
                </div>
            </div>
            <p className='lower--para' style={{ margin: "20px 0 0 320px" }}>(From second hand price list)<span >Armature</span> </p>
            <p style={{ margin: "0px 0 0 10px" }}>For more information on price list</p>
            <div className='boolean__values'>

                <p>Air Conditioner: {car.airConditioner ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : <img src={"https://th.bing.com/th/id/OIP.yOIXDrSIivmrWrgDQ7C4pgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7"} />}</p>
                <p>Roof Window: {car.roofWindow ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>Four Into Two: {car.fourIntoTwo ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>Stability Control: {car.stabilityControl ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>Tire Pressure sensors: {car.tirePressureSensors ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>ABS: {car.abs ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : <img img src={"https://th.bing.com/th/id/OIP.yOIXDrSIivmrWrgDQ7C4pgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7"} />}</p>
                <p> Power Steering: {car.powerSteering ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : <img img src={"https://th.bing.com/th/id/OIP.yOIXDrSIivmrWrgDQ7C4pgHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.6&pid=1.7"} />}</p>
                <p>Pedestrian Detection: {car.pedestrianDetection ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>Belt Sensors: {car.beltSensors ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>electricWindows: {car.electricWindows ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>auxiliaryBrakeSystem: {car.auxiliaryBrakeSystem ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>automaticLightning: {car.automaticLightning ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
                <p>Magnesium Wheels: {car.magnesiumWheels ? <img src={"https://simg.nicepng.com/png/small/236-2362999_check-icon-yellow-check-icon-png.png"} alt="Tick" /> : '×'}</p>
            </div>
            <p className='Hero2B_last_para'> *The equipment may vary from vehicle to vehicle, the exact equipment must be verified with the vehicle seller</p>
            <h2 className='Hero2B_last_Degree'>Degree of air pollution from the motor vehicle</h2>
            <div className='Hero2B_Contamination'>
                <p>Minimal Contamination</p>
                <p>Maximum Contamination</p>
            </div>
            <div className="Hero2B_Number">
                {/* <p className={`one ${car.contamination === 1 ? 'enlarged' : ''}`}>1</p>
                <p className={`two ${car.contamination === 2 ? 'enlarged' : ''}`}>2</p>
                <p className={`three ${car.contamination === 3 ? 'enlarged' : ''}`}>3</p>
                <p className={`four ${car.contamination === 4 ? 'enlarged' : ''}`}>4</p>
                <p className={`five ${car.contamination === 5 ? 'enlarged' : ''}`}>5</p>
                <p className={`six ${car.contamination === 6 ? 'enlarged' : ''}`}>6</p>
                <p className={`seven ${car.contamination === 7 ? 'enlarged' : ''}`}>7</p>
                <p className={`eight ${car.contamination === 8 ? 'enlarged' : ''}`}>8</p>
                <p className={`nine ${car.contamination === 9 ? 'enlarged' : ''}`}>9</p>
                <p className={`ten ${car.contamination === 10 ? 'enlarged' : ''}`}>10</p>
                <p className={`eleven ${car.contamination === 11 ? 'enlarged' : ''}`}> 11</p>
                <p className={`twelve ${car.contamination === 12 ? 'enlarged' : ''}`}>12</p>
                <p className={`thirteen ${car.contamination === 13 ? 'enlarged' : ''}`}>13 </p>
                <p className={`fourteen ${car.contamination === 14 ? 'enlarged' : ''}`}>14</p>
                <p className={`fifteen ${car.contamination === 15 ? 'enlarged' : ''}`}>15</p> */}

                {Array.from({ length: 15 }, (_, index) => (
                    <p
                        key={index + 1}
                        className={`number number-${index + 1} ${car.contamination === index + 1 ? 'enlarged' : ''}`}
                    >
                        {index + 1}
                    </p>
                ))}

            </div>
        </div>
            <div className='mistake'>
                <p>Ad number: 4526247 <span> I found a mistake </span></p>
            </div>
        </>
    )
}

export default Hero2B
