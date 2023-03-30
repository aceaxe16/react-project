export const AddManga = () => {
    return (
        <section id="create-page" className="auth">
        <form id="create" >
            <div className="container">
                <h1>Create Game</h1>

                <label htmlFor="leg-title">Legendary title:</label>
                <input 
                //value={values.title} 
                //onChange={changeHandler} 
                type="text" id="title" name="title" placeholder="Enter game title..." />

                <label htmlFor="category">Category:</label>
                <input 
                //value={values.category} 
                //onChange={changeHandler} 
                type="text" id="category" name="category" placeholder="Enter game category..." />

                
                <label htmlFor="game-img">Image:</label>
                <input 
                //value={values.imageUrl} 
                //onChange={changeHandler} 
                type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary" 
                //value={values.summary} 
                //</div>onChange={changeHandler}
                ></textarea>
                <input className="btn submit" type="submit" value="Add Manga" />
            </div>
        </form>
    </section>
    )
}