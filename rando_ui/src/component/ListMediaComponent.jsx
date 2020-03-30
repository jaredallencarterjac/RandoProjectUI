
class ListMediaComponent extends Component {

        constructor(props) {
            super(props)
            this.refreshMedia = this.refreshMedia.bind(this)
        }
        componentDidMount() {
            this.refreshMedia();
        }
        refreshMedia() {
            MediaDataService.retrieveAllMedia(USER)
                .then(
                    response => {
                        console.log(response);
                    }
                )
        }
    
    
    render() {
        return (
            <div className="container">
                <h3>All Media</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Batman</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListMediaComponent