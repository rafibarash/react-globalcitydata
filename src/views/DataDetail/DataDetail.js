import React, { Component } from 'react';
import { Preloader, Button } from 'react-materialize';
import veggies from '../../img/Veggies.jpg'
import './DataDetail.css';

const findData = (dataList, dataURL) => {
  if (!dataList || dataList.length === 0) {
    return null;
  }
  for (const data of dataList) {
    if (data.url === dataURL) return data;
  }
  return null;
};

class DataDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { match, dataList } = this.props;
    const { dataURL } = match.params;
    const data = findData(dataList, dataURL);
    return (
      <div className="container">
        {!data || !dataList ? (
          <div className="center">
            <p style={{ paddingBottom: 25 }}>Loading data detail...</p>
            <Preloader flashing />
          </div>
        ) : (
          <div style={{ paddingTop: 25, paddingBottom: 25 }}>
            <DataDetailBody data={data} />
          </div>
        )}
      </div>
    );
  }
}

class DataDetailBody extends Component {
  state = { showContact: false };

  render() {
    const { data } = this.props;
    const {
      applicableData,
      contact,
      contentType,
      context,
      description,
      highlight,
      highlight2,
      highlight3,
      keyTakeaways,
      outcomes,
      parameters,
      relevantPublications,
      spatialScales,
      determinants,
      sectors,
      temporalScales,
      technicalDetails,
      title,
      usesAndVisualizations,
      worldRegions,
    } = data;

    const { showContact } = this.state;

    const highlightIsEmpty = highlight === '';
    const highlightIsEmpty2 = highlight2 === '';
    const highlightIsEmpty3 = highlight3 === '';

    return (
      <div className="dataDetailContainer">
        <h2>{title}</h2>
        <p>{description}</p>
        <hr />
        <div className="dataDetailContent">
          {/* <h6>Tags</h6>
          <div>
            <div>
              <strong>Parameters:</strong>
              <ul>{parameters.map(x => <li key={x}>{x}, </li>)}</ul>
            </div>
            <div>
              <strong>Outcomes:</strong>
              <ul>{outcomes.map(x => <li key={x}>{x}, </li>)}</ul>
            </div>
            <div>
              <strong>Spatial Scales:</strong>
              <ul>{spatialScales.map(x => <li key={x}>{x}, </li>)}</ul>
            </div>
            <div>
              <strong>Temporal Scales:</strong>
              <ul>{temporalScales.map(x => <li key={x}>{x}, </li>)}</ul>
            </div>
            <div>
              <strong>World Regions:</strong>
              <ul>{worldRegions.map(x => <li key={x}>{x}, </li>)}</ul>
            </div>
          </div> */}
          {/* <img src={veggies} alt="test"/> */}
          <h6 style={{ paddingTop: 20 }}>Context</h6>
          <div>
            <p>{context}</p>
          </div>
          {/* <div>
            {highlightIsEmpty ? (
              <div>
                <h6>Key Highlights</h6>
                <ol>
                  <li>{highlight}</li>
                </ol>
              </div>
            ) : (
              <p></p>
            )}
          </div> */}
          {/* <h6>Key Highlights</h6>
          <div>
            <ol>
              <li>{highlight}</li>
              <li>{highlight2}</li>
              <li>{highlight3}</li>
            </ol>
          </div> */}
          <h6>Detailed Description</h6>
          <div>
            <p>{keyTakeaways}</p>
          </div>
          <h6>Sample Uses and Visualizations</h6>
          <div>
            <p>{usesAndVisualizations}</p>
          </div>
          <h6>Technical Details</h6>
          <div>
            <p>{technicalDetails}</p>
          </div>
          <h6>Applicable Datasets, Models, and Tutorials</h6>
          <div>
            <p>{applicableData}</p>
          </div>
          {/* <h6>Relevant Publications</h6> */}
          {/* <div>
        <p>{relevantPublications.map(pub => <p>{pub}</p>)}</p>
      </div> */}
          <Button
            waves="light"
            onClick={() => this.setState({ showContact: true })}
          >
            {showContact ? <div>{contact}</div> : <div>Request Access</div>}
          </Button>
        </div>
      </div>
    );
  }
}

export default DataDetail;
