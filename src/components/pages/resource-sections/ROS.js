import React from 'react'
import { Link } from 'react-router-dom'

const ROS = () => {
    return (
        <>
            <h1>Installing Ross</h1>
            <p>When it comes to installing ross there are 3 main options</p>
            
            <li>Virtualization</li>
            <li>Hard Drive Partitioning</li>
            <li>Native Install on External Hard Drive</li>
            <br></br>

            <h2>Virtualization</h2>
            <p>Virtualization involves installing an emulator to run an instance of the Linux os inside a window on a host computer.
                The main benifit of this type of install is the ability to add and remove various versions of OS's without the need
                of making any major change to your hard drive. It is the easiest to implement.

                The downsides include needing at least 8gb of ram for the set up we are running, as well as needing different install
                software depending on your native OS. In addition the computer vision software requirements are different, and running
                those algorithms might produce unexpected results, or refuse to run altogether.

                Still a great choice if Linus is new to you and want to try it out risk free.
            </p>
            <Link to='/' className=''>Install Linux on windows</Link>
            <br></br>
            <Link to='/' className=''>Install Linux on MAC</Link>
            <br></br>

            <h2>Hard Drive Partitioning</h2>
            <p>This method involves partitioning your hard drive on the host computer to allow seperate OS's to be installed on the same drive.
                It has the least requirements, as 
            </p>
            <Link to='/' className=''>Install Linux on windows</Link>
            <br></br>
            <Link to='/' className=''>Install Linux on MAC</Link>
            <br></br>
        </>
    )
}

export default ROS