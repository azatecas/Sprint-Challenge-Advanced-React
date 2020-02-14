import React from 'react';
import Card from './Card';
// import Pagination from '../hooks/Pagination';

const CardContainer = ({players}) => {
    // // console.log('this players',players);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage] = useState(5);

    // //get current post
    // const indexOfLastPost = currentPage * postPerPage;
    // const indexofFirstPost = indexOfLastPost - postPerPage;
    // const currentPosts = players.slice(indexofFirstPost, indexOfLastPost);

    // //paginate
    // const paginate = (int) => {
    //     setCurrentPage(int);
    //     window.scroll({top: 0, left: 0, behavior: 'smooth' });
    // }


    return (
        <div className="card-container">
            {/* <Pagination  postsPerPage={postPerPage} totalPosts={players.length}   paginate={paginate} /> */}

            {players.map((item, index) => (
                 
                <Card players={item} key={item.id}/>
            ))}
        </div>
        
    )

}

export default CardContainer;

