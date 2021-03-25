import React from 'react'
import MemberSection from '../MemberSection'

const Members = () => {
    let json = require('../../data/members.json')
    return(
        <>
            <h1 style={{textAlign: 'center', fontFamily: 'Audiowide, sans-serif'}}>Meet the Officers</h1>
            <MemberSection list={json.officers}/>
            <h1 style={{textAlign: 'center', fontFamily: 'Audiowide, sans-serif'}}>Meet the Members</h1>
            <MemberSection list={json.members}/>
        </>
    )
}

export default Members