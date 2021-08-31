import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MdContentCopy } from 'react-icons/md'
import { FaDirections } from 'react-icons/fa'



//[12.958647429470709, 77.52561168192169]

const MapView = (props) => {
    return (
        <>
                <div>
                    <h4 className="text-xl font-normal ">Call</h4>
                    <h5 className="text-zomato-400 font-normal">{props.phno}</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-normal ">Direction</h4>
                    <div className="w-full h-48">
                        <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.mapLocation}>
                            <Popup>
                                {props.title}
                            </Popup>
                        </Marker>
                        </MapContainer>
                    </div>
                    <p>
                        {props.address}
                    </p>
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-2 px-3 py-1 text-gray-600 border border-gray-400 rounded-lg">
                            <MdContentCopy /> Copy
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1 text-gray-600 border border-gray-400 rounded-lg">
                            <FaDirections className="text-zomato-400" /> Direction
                        </button>
                    </div>
                </div>
        </>
    )
}

export default MapView
