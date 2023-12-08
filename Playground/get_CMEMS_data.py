import copernicus_marine_client as copernicusmarine

maxlat = 12
minlat = 1.5
minlon = 129.5
maxlon = 137.0

#129.5088048172889 136.9541002113523 1.621407206177722 11.558724726465158

copernicusmarine.subset(
    dataset_id="cmems_obs-sl_glo_phy-ssh_my_allsat-l4-duacs-0.25deg_P1D",
    variables=["adt", "sla"],
    minimum_longitude=minlon,
    maximum_longitude=maxlon,
    minimum_latitude=minlat,
    maximum_latitude=maxlat,
    start_datetime="1993-01-01T00:00:00",
    end_datetime="2023-04-30T23:59:59",
)


