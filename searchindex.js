Search.setIndex({"docnames": ["SL_indicators_NBs/SL_FloodFrequency", "SL_indicators_NBs/SL_magnitude", "intro"], "filenames": ["SL_indicators_NBs/SL_FloodFrequency.ipynb", "SL_indicators_NBs/SL_magnitude.ipynb", "intro.md"], "titles": ["<span class=\"section-number\">2. </span>Minor Flood Frequency and Duration", "<span class=\"section-number\">1. </span>Regional and Local Sea Level Change", "Welcome"], "terms": {"thi": [0, 1, 2], "file": [0, 1, 2], "taken": 0, "http": [0, 1, 2], "github": 0, "com": [0, 2], "jpotemra": 0, "pccm": 0, "blob": 0, "main": 0, "chapter": 0, "5": [0, 1], "3a": 0, "sea": 0, "level": 0, "malakal_sl_floodfrequ": 0, "ipynb": 0, "demonstr": 0, "how": 0, "might": 0, "work": [0, 2], "juptyer": 0, "book": [0, 2], "context": 0, "It": 0, "ha": 0, "been": 0, "adapt": 0, "lot": 0, "here": [0, 1, 2], "we": [0, 1], "two": 0, "indic": 0, "concern": 0, "malak": 0, "gaug": 0, "after": 0, "first": [0, 1], "take": 0, "gener": 0, "look": [0, 1], "type": 0, "ar": [0, 1], "abl": 0, "uhslc": [0, 1], "These": [0, 1], "base": 0, "us": [0, 1], "rel": [0, 1], "thought": 0, "interact": 0, "There": 0, "launch": 0, "button": 0, "i": [0, 1, 2], "can": [0, 1], "disabl": 0, "d": [0, 1, 2], "rather": 0, "have": [0, 1], "static": 0, "do": [0, 1], "binder": 0, "Not": [0, 1], "sure": [0, 1], "about": [0, 1], "major": 0, "structur": [0, 2], "right": 0, "now": [0, 1], "notebook": 0, "intra": 0, "annual": 0, "which": [0, 1], "doesn": [0, 1], "t": [0, 1, 2], "make": [0, 1], "ani": [0, 1], "sens": 0, "But": 0, "separ": 0, "seem": [0, 1], "like": 0, "thei": 0, "mostli": 0, "same": 0, "should": 0, "go": [0, 1], "soon": 0, "who": 0, "primari": [0, 1], "owner": 0, "mine": 0, "current": 0, "under": 0, "my": 0, "ucsd": 0, "address": 0, "No": 0, "bueno": 0, "need": [0, 1, 2], "access": 0, "quick": [0, 1], "ensur": [0, 1], "analyz": 0, "thing": [0, 1], "xarrai": [0, 1], "xr": [0, 1], "numpi": [0, 1], "np": [0, 1], "datetim": [0, 1], "matplotlib": [0, 1], "pyplot": [0, 1], "plt": [0, 1], "panda": [0, 1], "pd": [0, 1], "os": [0, 1], "urllib": [0, 1], "request": [0, 1], "urlretriev": [0, 1], "download": [0, 1], "myst_nb": 0, "glue": 0, "figur": [0, 1], "number": [0, 1], "when": 0, "export": 0, "latex": 0, "scipi": [0, 1], "stat": [0, 1], "fit": 0, "distribut": 0, "bs4": 0, "beautifulsoup": 0, "pars": [0, 1], "html": 0, "seaborn": [0, 1], "sn": [0, 1], "todo": 0, "turn": 0, "section": [0, 1], "dropdown": 0, "avail": [0, 1], "pull": 0, "next": [0, 1], "ll": [0, 1], "The": [0, 1], "malakala": 0, "id": [0, 1], "7": [0, 1], "netcdf": [0, 1], "our": [0, 1], "directori": [0, 1], "peek": 0, "dataset": [0, 1], "also": [0, 1], "locat": 0, "uhslc_id": [0, 1], "fname": [0, 1], "f": [0, 1], "h": [0, 1], "03": [0, 1], "nc": [0, 1], "hourli": [0, 1], "daili": [0, 1], "datadir": 0, "url": [0, 1], "soest": [0, 1], "hawaii": [0, 1], "edu": [0, 1], "fast": 0, "path": [0, 1], "join": [0, 1], "exist": [0, 1], "data_xr": 0, "open_dataset": [0, 1], "lt": [0, 1], "gt": [0, 1], "dimens": [0, 1], "record_id": [0, 1], "1": [0, 1], "time": 0, "476601": [], "coordin": [0, 1], "datetime64": [0, 1], "ns": [0, 1], "1969": [0, 1], "05": [0, 1], "18t15": [0, 1], "00": [0, 1], "2023": [0, 1], "int16": [0, 1], "70": 0, "variabl": [0, 1], "sea_level": [0, 1], "float32": [0, 1], "lat": [0, 1], "lon": [0, 1], "station_nam": [0, 1], "s7": [0, 1], "station_countri": [0, 1], "s5": [0, 1], "station_country_cod": [0, 1], "gloss_id": [0, 1], "ssc_id": [0, 1], "s4": [0, 1], "last_rq_dat": 0, "attribut": [0, 1], "titl": [0, 1], "deliveri": 0, "ncei_template_vers": [0, 1], "ncei_netcdf_timeseries_orthogonal_template_v2": [0, 1], "0": [0, 1], "featuretyp": [0, 1], "timeseri": 0, "convent": [0, 1], "cf": [0, 1], "6": [0, 1], "acdd": [0, 1], "3": [0, 1], "date_cr": [0, 1], "11": [0, 1], "15t14": [], "34": 0, "07z": [], "publisher_nam": [0, 1], "univers": [0, 1], "center": [0, 1], "publisher_email": [0, 1], "philiprt": [0, 1], "markm": [0, 1], "publisher_url": [0, 1], "summari": [0, 1], "assembl": [0, 1], "deli": 0, "processing_level": [0, 1], "fd": 0, "undergo": [0, 1], "acknowledg": [0, 1], "databas": 0, "support": [0, 1], "datasetdimens": [0, 1], "1time": [0, 1], "476601coordin": [], "2": [0, 1], "09": [0, 1], "long_nam": [0, 1], "timeaxi": [0, 1], "tarrai": [0, 1], "x27": [0, 1], "000000000": [0, 1], "18t16": [0, 1], "028800000": [0, 1], "59": [0, 1], "971200000": [0, 1], "30t21": [], "30t22": [], "dtype": [0, 1], "int1670long_nam": 0, "uniqu": [0, 1], "each": [0, 1], "record": [0, 1], "e": [0, 1], "version": [0, 1], "databasearrai": [0, 1], "10": [0, 1], "levelunit": [0, 1], "millimeterssourc": [0, 1], "situ": [0, 1], "water": [0, 1], "observationsplatform": [0, 1], "valu": [0, 1], "standard_nam": [0, 1], "latitudeunit": [0, 1], "degrees_northaxi": [0, 1], "yvalid_min": [0, 1], "90valid_max": [0, 1], "90": [0, 1], "longitudeunit": [0, 1], "degrees_eastaxi": [0, 1], "xvalid_min": [0, 1], "0valid_max": [0, 1], "360": [0, 1], "name": [0, 1], "countri": [0, 1], "iso": [0, 1], "3166": [0, 1], "code": [0, 1], "numer": [0, 1], "comment": [0, 1], "digit": [0, 1], "g": [0, 1], "003": [0, 1], "store": [0, 1], "integ": [0, 1], "wmo": [0, 1], "ioc": [0, 1], "global": [0, 1], "observ": [0, 1], "system": [0, 1], "gloss": [0, 1], "sealevel": [0, 1], "catalog": [0, 1], "ssc": [0, 1], "produc": [0, 1], "monitor": [0, 1], "facil": [0, 1], "vliz": [0, 1], "vari": [0, 1], "length": [0, 1], "pad": [0, 1], "space": [0, 1], "charact": [0, 1], "retangular": [0, 1], "matrix": [0, 1], "provid": [0, 1], "date": 0, "last": 0, "research": [0, 1], "valuecom": 0, "correspond": 0, "an": [0, 1], "ident": 0, "vector": 0, "less": 0, "than": 0, "equal": 0, "given": 0, "rq": 0, "miss": 0, "index": [0, 1], "timepandasindexpandasindex": [0, 1], "datetimeindex": [0, 1], "18": [0, 1], "15": [0, 1], "16": [0, 1], "028800": [0, 1], "971200": [0, 1], "19": [0, 1], "21": [0, 1], "22": [0, 1], "30": [0, 1], "13": [0, 1], "freq": [0, 1], "none": [0, 1], "record_idpandasindexpandasindex": [0, 1], "int64index": [0, 1], "int64": [0, 1], "0featuretyp": [0, 1], "timeseriesconvent": [0, 1], "3date_cr": [0, 1], "07zpublisher_nam": [], "edupublisher_url": [0, 1], "edusummari": [0, 1], "averag": [0, 1], "oper": [0, 1], "creator": 0, "see": [0, 1], "independ": 0, "seri": 0, "within": [0, 1], "4": [0, 1], "week": 0, "collect": [0, 1], "quot": 0, "turnaround": 0, "compar": [0, 1], "cycl": 0, "replac": 0, "stream": 0, "former": 0, "becom": 0, "contain": 0, "hybrid": 0, "compos": 0, "append": 0, "end": [0, 1], "evalu": [0, 1], "outlier": [0, 1], "detect": [0, 1], "combin": 0, "multipl": [0, 1], "channel": [0, 1], "etc": [0, 1], "In": 0, "receiv": [0, 1], "ti": [0, 1], "benchmark": [0, 1], "comparison": [0, 1], "nearbi": [0, 1], "nation": [0, 1], "ocean": [0, 1], "atmospher": [0, 1], "administr": [0, 1], "noaa": [0, 1], "offic": [0, 1], "climat": [0, 1], "oco": [0, 1], "save": [0, 1], "few": 0, "come": 0, "up": 0, "later": [0, 1], "report": 0, "str": 0, "8": [0, 1], "startdatetim": 0, "enddatetim": 0, "displai": 0, "fals": 0, "For": [0, 1], "more": 0, "inform": [0, 1], "process": 0, "metdata": 0, "exampl": 0, "hard": [0, 1], "read": [0, 1], "m": [0, 1], "becaus": [0, 1], "eleg": 0, "wai": 0, "tabl": 0, "moment": [0, 2], "far": 0, "tell": 0, "simpl": 0, "call": 0, "coop": 0, "api": 0, "sourc": 0, "though": 0, "instead": 0, "datums_007": 0, "csv": [0, 1], "datumt": 0, "read_csv": 0, "sep": 0, "extract": [0, 1], "datafram": [0, 1], "datumnam": 0, "float64": [0, 1], "1000": [0, 1], "convert": [0, 1], "mm": [0, 1], "attr": [0, 1], "descript": 0, "statu": 0, "14": [0, 1], "nov": 0, "01": [0, 1], "jan": 0, "31": [0, 1], "dec": 0, "2001": 0, "tidal": 0, "period": [0, 1], "162": [0, 1], "mean": [0, 1], "higher": 0, "high": 0, "mhw": 0, "087": 0, "mtl": 0, "530": 0, "msl": 0, "532": 0, "dtl": 0, "458": 0, "diurnal": 0, "mlw": 0, "974": 0, "low": [0, 1], "mllw": 0, "753": 0, "lower": 0, "9": [0, 1], "stnd": 0, "000": 0, "409": 0, "great": [0, 1], "rang": [0, 1], "mn": 0, "114": 0, "12": [0, 1], "dhq": 0, "075": 0, "inequ": 0, "dlq": 0, "220": 0, "hwi": 0, "unavail": 0, "greenwich": 0, "interv": 0, "hour": 0, "lwi": 0, "maximum": 0, "785": 0, "highest": 0, "17": 0, "max": [0, 1], "amp": 0, "23": [0, 1], "jun": 0, "2013": 0, "lst": 0, "minimum": 0, "034": 0, "lowest": 0, "min": [0, 1], "1992": [0, 1], "20": [0, 1], "hat": 0, "567": 0, "astronom": 0, "27": [0, 1], "aug": 0, "1988": 0, "175": 0, "1986": 0, "24": [0, 1], "lev": 0, "611": 0, "switch": 0, "25": [0, 1], "levb": 0, "529": 0, "To": [0, 1], "all": [0, 1], "correct": [0, 1], "truncat": 0, "millimet": 0, "If": 0, "want": [0, 1], "centimet": 0, "cm": [0, 1], "scale": 0, "divid": 0, "fig": [0, 1], "ax": [0, 1], "subplot": [0, 1], "sharex": 0, "true": [0, 1], "figsiz": [0, 1], "autofmt_xd": 0, "set_ylabel": [0, 1], "fontsiz": [0, 1], "text": [0, 1], "trend": [0, 1], "start": [0, 1], "begin": 0, "get": [0, 1], "epoch_tim": 0, "epoch_start": [0, 1], "split": 0, "strptime": 0, "b": [0, 1], "y": [0, 1], "processind": 0, "epoch_end": [0, 1], "object": [0, 1], "hourly_data": 0, "sel": [0, 1], "dict": [0, 1], "slice": [0, 1], "startepochdatetim": 0, "endepochdatetim": 0, "ts_full_fig": 0, "full": 0, "palau": 0, "entir": 0, "goe": [0, 1], "mai": 0, "april": 0, "consult": [0, 1], "ayesha": [0, 1], "dai": [0, 1], "dt": [0, 1], "dayofyear": 0, "month": 0, "where": [0, 1], "1st": 0, "subtract": [0, 1], "year_storm": 0, "astyp": 0, "int": 0, "arrai": [0, 1], "1982": 0, "determin": 0, "event": 0, "abov": [0, 1], "349489": 0, "251": 0, "401": 0, "373": 0, "162e": 0, "317": 0, "318": 0, "349489coordin": 0, "14long_nam": 0, "01t00": [0, 1], "01t01": 0, "13t22": 0, "14t00": 0, "623": 0, "0unit": 0, "mmarrai": 0, "650": 0, "895": 0, "s7b": [0, 1], "namearrai": [0, 1], "s5b": 0, "float642": 0, "03unit": 0, "2162": 0, "int641": 0, "318arrai": 0, "11arrai": 0, "int641983": 0, "2022arrai": 0, "int641982": 0, "04": [0, 1], "06": [0, 1], "07": [0, 1], "assum": 0, "column": 0, "follow": [0, 1], "thompson": 0, "et": 0, "al": 0, "twm": 0, "other": [0, 1], "Then": 0, "group": 0, "visual": 0, "tempor": 0, "pattern": 0, "swl": 0, "exceed": 0, "histogram": 0, "dash": 0, "red": [0, 1], "line": [0, 1], "chosen": 0, "resampl": [0, 1], "sl_daily_max": 0, "14563": 0, "109": 0, "33": [0, 1], "134": [0, 1], "585": 0, "2018": [0, 1], "31t22": [0, 1], "313": 0, "314": 0, "315": 0, "316": 0, "14563record_id": 0, "1coordin": 0, "14arrai": 0, "02t00": [0, 1], "03t00": [0, 1], "12t00": 0, "13t00": 0, "269": 0, "57": 0, "float327": [0, 1], "33standard_nam": 0, "90arrai": 0, "float32134": [0, 1], "5standard_nam": 0, "360arrai": 0, "463": [0, 1], "float32585": 0, "0long_nam": 0, "int167": 0, "7long_nam": 0, "float32120": 0, "120": 0, "s4b": 0, "mala": 0, "02": [0, 1], "08": [0, 1], "new": [0, 1], "x": [0, 1], "xlabel": 0, "ylabel": 0, "pdf": 0, "95th": 0, "percentil": 0, "sea_level_data_cm": 0, "remov": 0, "nan": [0, 1], "isnan": 0, "hist": 0, "bin": 0, "100": [0, 1], "densiti": 0, "label": [0, 1], "axvlin": 0, "color": [0, 1], "r": [0, 1], "linestyl": [0, 1], "4f": 0, "format": [0, 1], "set_xlabel": [0, 1], "probabl": [0, 1], "set_titl": [0, 1], "nwith": 0, "add": [0, 1], "middl": 0, "axi": [0, 1], "placement": 0, "ymin": 0, "ymax": 0, "get_ylim": 0, "yrang": 0, "y_middl": 0, "rotat": 0, "va": 0, "histogram_fig": 0, "find": [0, 1], "exce": 0, "flood_dai": 0, "filter": [0, 1], "select": 0, "relev": 0, "flood_days_data": 0, "drop": [0, 1], "flood_days_df": 0, "to_datafram": 0, "reset_index": 0, "flood_days_per_year": 0, "groupbi": 0, "size": 0, "flood_days_count": 0, "flood_hour": 0, "flood_hours_data": 0, "flood_hours_df": 0, "flood_hours_per_year": 0, "flood_hours_count": 0, "defin": [0, 1], "sweet": 0, "spm": 0, "heatmap": 0, "palett": [0, 1], "improv": 0, "readabl": 0, "adjusted_heatmap_palett": 0, "color_palett": [0, 1], "ylorrd": 0, "as_cmap": [0, 1], "norm": 0, "normal": [0, 1], "barplot": 0, "hue": 0, "dodg": 0, "legend": [0, 1], "set_xtick": 0, "len": [0, 1], "tick": 0, "show": [0, 1], "everi": [0, 1], "5th": 0, "year_tick": 0, "set_xticklabel": 0, "45": [0, 1], "ad": [0, 1], "light": 0, "grai": 0, "grid": [0, 1], "lightgrai": 0, "linewidth": [0, 1], "per": 0, "threshold_counts_days_fig": 0, "examin": 0, "issu": 0, "being": 0, "just": 0, "continu": 0, "me": 0, "what": [0, 2], "anywai": 0, "carri": 0, "veri": 0, "awar": 0, "colorbar": 0, "polar": 0, "opposit": 0, "bother": 0, "previou": 0, "cell": [0, 1], "bad": 0, "made": 0, "function": [0, 1], "bigger": 0, "fish": 0, "fry": 0, "duration_fig": 0, "icon": [0, 1], "depict": [0, 1], "william": 0, "joseph": 0, "park": 0, "john": [0, 1], "marra": 0, "chri": 0, "zerva": 0, "stephen": 0, "gill": 0, "rise": 0, "nuisanc": 0, "around": [0, 1], "state": 0, "technic": 0, "2014": 0, "repositori": 0, "gov": 0, "view": 0, "30823": 0, "philip": 0, "matthew": 0, "j": 0, "widlanski": 0, "mark": 0, "merrifield": 0, "janet": 0, "becker": 0, "statist": 0, "model": 0, "coastal": 0, "honolulu": 0, "dure": 0, "21st": 0, "centuri": 0, "journal": 0, "geophys": 0, "124": 0, "2787": 0, "2802": 0, "2019": [0, 1], "onlinelibrari": 0, "wilei": 0, "doi": 0, "ab": [0, 1], "1029": 0, "2018jc014741": 0, "Is": [], "reason": [], "page": 2, "isn": 2, "build": [], "doobeedoobe": [], "doobeedoo": [], "print": 1, "doobeedoobeedoobeedoo": [], "w": 1, "area": 1, "interest": 1, "absolut": 1, "1993": 1, "2022": 1, "result": 1, "includ": 1, "eez": [], "s": [1, 2], "proxim": 1, "por": 1, "monthli": 1, "addit": 1, "uhlsc": 1, "webpag": 1, "That": 1, "complet": 2, "necessari": [1, 2], "land": [1, 2], "some": 2, "sort": 2, "am": [1, 2], "off": 2, "from": [1, 2], "doc": 2, "googl": 2, "document": [1, 2], "1khw": 2, "qcsdaaitdbfi_gg_xveegga2zmdp": 2, "edit": 2, "region": 2, "local": 2, "chang": 2, "minor": 2, "flood": 2, "frequenc": 2, "durat": 2, "import": 1, "librari": 1, "pathlib": 1, "json": 1, "linregress": 1, "signal": 1, "detrend": 1, "cartopi": 1, "cr": 1, "ccr": 1, "featur": 1, "cfeatur": 1, "establish": 1, "data_dir": 1, "alitmetri": 1, "its": 1, "through": 1, "let": 1, "meta": 1, "geojson": 1, "IS": 1, "A": 1, "hidden": 1, "IT": 1, "BY": 1, "click": 1, "THE": 1, "websit": 1, "properti": 1, "geometri": 1, "break": 1, "analysi": 1, "so": 1, "sl_magnitude_result": 1, "ccar": 1, "colorado": 1, "saniti": 1, "check": 1, "start_dat": 1, "end_dat": 1, "them": 1, "string": 1, "start_date_str": 1, "strftime": 1, "end_date_str": 1, "obtain": 1, "xxx": 1, "open": 1, "palaueez": 1, "load": 1, "palau_eez": 1, "help": 1, "cmem": 1, "min_lon": 1, "max_lon": 1, "min_lat": 1, "max_lat": 1, "run": 1, "get_cmems_data": 1, "py": 1, "playground": 1, "termin": 1, "python": 1, "copernicus_marine_cli": 1, "instal": 1, "fname_cmem": 1, "cmems_ob": 1, "sl_glo_phi": 1, "ssh_my_allsat": 1, "l4": 1, "duac": 1, "25deg_p1d_adt": 1, "sla_129": 1, "62e": 1, "136": 1, "88e_1": 1, "62n": 1, "88n_1993": 1, "ds": 1, "note": 1, "product": 1, "direct": 1, "unclear": 1, "9496": 1, "latitud": 1, "42": 1, "longitud": 1, "625": 1, "875": 1, "125": 1, "375": 1, "38": 1, "62": 1, "88": 1, "129": 1, "130": 1, "adt": 1, "sla": 1, "metadata_convent": 1, "unidata": 1, "discoveri": 1, "v1": 1, "cdm_data_typ": 1, "surfac": 1, "height": 1, "measur": 1, "altimet": 1, "contact": 1, "servicedesk": 1, "mercat": 1, "eu": 1, "creator_email": 1, "time_coverage_dur": 1, "p1d": 1, "time_coverage_end": 1, "01t12": 1, "00z": 1, "time_coverage_resolut": 1, "time_coverage_start": 1, "31t12": 1, "merg": 1, "satellit": 1, "copernicus_marine_client_vers": 1, "0xarrai": 1, "9496latitud": 1, "42longitud": 1, "30coordin": 1, "float321": 1, "88axi": 1, "ybound": 1, "lat_bndslong_nam": 1, "latitudestandard_nam": 1, "degrees_northvalid_max": 1, "89": 1, "875valid_min": 1, "875arrai": 1, "float32129": 1, "9axi": 1, "xbound": 1, "lon_bndslong_nam": 1, "longitudestandard_nam": 1, "degrees_eastvalid_max": 1, "179": 1, "131": 1, "132": 1, "133": 1, "135": 1, "31arrai": 1, "29t00": 1, "30t00": 1, "31t00": 1, "dynam": 1, "topographi": 1, "geoid": 1, "mdt": 1, "user": 1, "manual": 1, "detailsgrid_map": 1, "crslong_nam": 1, "topographystandard_nam": 1, "sea_surface_height_above_geoidunit": 1, "11964960": 1, "ancillary_vari": 1, "err_slacom": 1, "anomali": 1, "referenc": 1, "2012": 1, "anomalystandard_nam": 1, "sea_surface_height_above_sea_levelunit": 1, "latitudepandasindexpandasindex": 1, "float64index": 1, "longitudepandasindexpandasindex": 1, "26": 1, "28": 1, "29": 1, "6metadata_convent": 1, "0cdm_data_typ": 1, "gridcom": 1, "deriv": 1, "variablescontact": 1, "eucreator_email": 1, "eucreator_nam": 1, "themat": 1, "centercreator_url": 1, "marin": 1, "copernicu": 1, "eudate_cr": 1, "2021": 1, "26t19": 1, "51": 1, "54zdate_issu": 1, "54zdate_modifi": 1, "54zgeospatial_lat_max": 1, "875geospatial_lat_min": 1, "875geospatial_lat_resolut": 1, "25geospatial_lat_unit": 1, "degrees_northgeospatial_lon_max": 1, "875geospatial_lon_min": 1, "875geospatial_lon_resolut": 1, "25geospatial_lon_unit": 1, "degrees_eastgeospatial_vertical_max": 1, "0geospatial_vertical_min": 1, "0geospatial_vertical_posit": 1, "downgeospatial_vertical_resolut": 1, "pointgeospatial_vertical_unit": 1, "mhistori": 1, "56z": 1, "creationinstitut": 1, "cl": 1, "cneskeyword": 1, "heightkeywords_vocabulari": 1, "coard": 1, "forecast": 1, "standard": 1, "nameslicens": 1, "web": 1, "servic": 1, "commit": 1, "licenc": 1, "phpplatform": 1, "er": 1, "topex": 1, "poseidonprocessing_level": 1, "l4product_vers": 1, "vdec2021project": 1, "environ": 1, "refer": 1, "eusoftware_vers": 1, "0_duacs_dt2021_baselinesourc": 1, "measurementsssalto_duacs_com": 1, "mission": 1, "inter": 1, "calibr": 1, "poseidon": 1, "between": 1, "2002": 1, "jason": 1, "2008": 1, "ostm": 1, "2016": 1, "sinc": 1, "standard_name_vocabulari": 1, "metadata": 1, "v37summari": 1, "ssalto": 1, "delai": 1, "multi": 1, "over": 1, "p1dtime_coverage_end": 1, "00ztime_coverage_resolut": 1, "p1dtime_coverage_start": 1, "00ztitl": 1, "variablescopernicus_marine_client_vers": 1, "best": 1, "deploy": 1, "rqd": 1, "pacif": 1, "onli": 1, "thru": 1, "rsl": 1, "434985": 1, "72": 1, "s1": 1, "decimation_method": 1, "reference_cod": 1, "reference_offset": 1, "jasl": 1, "04t01": 1, "53": 1, "36z": 1, "joint": 1, "archiv": 1, "q": 1, "n": 1, "suppo": 1, "434985coordin": 1, "31t21": [0, 1], "int1672long_nam": 1, "identifi": 1, "versioncom": 1, "letter": 1, "z": 1, "differenti": 1, "segment": 1, "cannot": 1, "link": 1, "common": 1, "decim": 1, "methodflag_valu": 1, "4flag_mean": 1, "spot": 1, "codeflag_valu": 1, "xflag_mean": 1, "unit": 1, "millimeterslong_nam": 1, "offsetcom": 1, "constant": 1, "offset": 1, "staff": 1, "zero": 1, "36zpublisher_nam": 1, "collabor": 1, "world": 1, "oceanographi": 1, "environment": 1, "ncei": 1, "well": 1, "control": 1, "appropri": 1, "scientif": 1, "applic": 1, "largest": 1, "ongo": 1, "effort": 1, "seek": 1, "acquir": 1, "site": 1, "uncov": 1, "histor": 1, "network": 1, "wide": 1, "focus": 1, "stabil": 1, "via": 1, "meter": 1, "match": 1, "epoch": 1, "tide_gauge_data_por": 1, "tide_gauge_data_met": 1, "tide_gauge_data_clean": 1, "dropna": 1, "dim": 1, "befor": 1, "tide_gauge_daily_avg": 1, "1d": 1, "93": 1, "2011": 1, "epoch_daily_avg": 1, "epoch_daily_mean": 1, "rsl_daili": 1, "dataarrai": 1, "12749314": 1, "1223681": 1, "16636801": 1, "2099514": 1, "18257642": 1, "61703473": 1, "mxarrai": 1, "1275": 1, "1224": 1, "1664": 1, "128": 1, "1734": 1, "1826": 1, "617arrai": 1, "sl": 1, "fact": 1, "curs": 1, "detail": 1, "epoch_daily_mean_cmem": 1, "method": 1, "nearest": 1, "formatted_mean": 1, "2f": 1, "re": 1, "focu": 1, "time_cmem": 1, "to_datetim": 1, "point": 1, "sla_nearest": 1, "sla_nearest_lat": 1, "sla_nearest_lon": 1, "symbol": 1, "lat_str": 1, "3f": 1, "u00b0": 1, "els": 1, "lon_str": 1, "closest": 1, "err_sla": 1, "abo": 1, "grid_map": 1, "sea_surface_height_above_sea_level": 1, "375axi": 1, "4axi": 1, "Of": 1, "equival": 1, "style": 1, "set_styl": 1, "whitegrid": 1, "pair": 1, "scatter": 1, "alpha": 1, "year": 1, "limit": 1, "set_ylim": 1, "35": 1, "set_xlim": 1, "0x1416f3f70": [], "unless": 1, "todai": 1, "known": 1, "And": 1, "stai": 1, "reset": 1, "uh": 1, "rsl_daily_mhhw": 1, "back": 1, "similar": 1, "sla_mhhw": 1, "yike": 1, "foul": 1, "def": 1, "process_data_trend_mag": [], "sea_level_anomali": 1, "sea_level_anomaly_nonan": 1, "sea_level_anomaly_detrend": [], "apply_ufunc": [], "input_core_dim": [], "output_core_dim": [], "squeez": 1, "extra": [], "trend_mag": 1, "sea_level_trend": 1, "reindex": [], "origin": [], "time_diff": [], "timedelta": [], "trend_rat": 1, "365": [], "elif": [], "1m": 1, "1y": [], "error": [], "recogn": [], "return": 1, "valid_mask": [], "isnul": [], "non": 1, "differ": [], "estim": [], "diff": [], "timedelta64": 1, "median": [], "consid": [], "degre": [], "polynomi": [], "mayb": [], "detrend_dim": [], "da": [], "deg": 1, "along": 1, "singl": [], "p": [], "polyfit": [], "polyv": [], "polyfit_coeffici": [], "ryan": [], "abernathei": [], "trend_mag_asl": 1, "trend_line_asl": 1, "trend_rate_asl": 1, "trend_mag_cmem": 1, "trend_line_cmem": 1, "trend_rate_cmem": 1, "12487541": 1, "12443124": 1, "12441588": 1, "12057757": 1, "12103298": 1, "1216079": 1, "12339494": 1, "12317126": 1, "12309493": 1, "12201859": 1, "12265486": 1, "122929": 1, "12234466": 1, "12250724": 1, "12235102": 1, "12329087": 1, "12398867": 1, "12393241": 1, "15246544": 1, "15107527": 1, "14979549": 1, "14676899": 1, "14614305": 1, "14566854": 1, "1502352": 1, "1490968": 1, "14814612": 1, "14241473": 1, "1416442": 1, "1410236": 1, "14799386": 1, "1470343": 1, "14637114": 1, "13882999": 1, "13786332": 1, "13725525": 1, "9xarrai": 1, "300": 1, "1249": 1, "1244": 1, "1248": 1, "1399": 1, "1388": 1, "1379": 1, "1373arrai": 1, "weight": 1, "cosin": 1, "rectangular": 1, "multipli": 1, "co": 1, "deg2rad": 1, "appli": 1, "trend_mag_weight": 1, "trend_mag_region": 1, "output": 1, "bound": 1, "40": 1, "subplot_kw": 1, "project": 1, "platecarre": 1, "colormap": 1, "cmap": 1, "vmax": 1, "vmin": 1, "transform": 1, "cbar_kwarg": 1, "\u03b4": 1, "coastlin": 1, "add_featur": 1, "lightgrei": 1, "black": 1, "gl": 1, "gridlin": 1, "draw_label": 1, "set1": 1, "95": 1, "transax": 1, "verticalalign": 1, "top": 1, "56": 1, "wa": 1, "alreadi": 1, "done": 1, "0x143b05cd0": [], "ugli": [], "TO": [], "parti": [], "BE": [], "fuse": [], "WITH": [], "ONE": [], "process_trend_with_nan": 1, "nonan_detrend": 1, "hold": 1, "reinsert": 1, "detrended_with_nan": 1, "full_lik": 1, "fill_valu": 1, "loc": 1, "trend_mag_rsl": 1, "trend_line_rsl": 1, "trend_rate_rsl": 1, "55": 1, "48": 1, "rsltimeseri": 1, "data_source_altimetri": 1, "ssh": 1, "data_source_tide_gaug": 1, "time_period": 1, "trend_cmyr_altimetri": 1, "trend_cmyr_tide_gaug": 1, "delta_sea_level_altimetri": 1, "delta_sea_level_tide_gaug": 1, "yr": 1, "data_sourc": 1, "output_file_path": 1, "to_csv": 1, "559384": [], "543223": 1, "482880": [], "554222": 1, "462997": 1, "trend_mag_cmems_cm": 1, "outlin": 1, "dot": 1, "200": 1, "c": 1, "edgecolor": 1, "scari": 1, "vs": 1, "0x143dcdf70": [], "477345": 0, "07t14": 0, "12z": 0, "477345coordin": 0, "12zpublisher_nam": 0, "0x14cf620a0": [], "float": [], "time_mag": 1, "0x14d6e9c40": [], "559432": 1, "0x14f801ac0": [], "0x1484a3f70": 1, "0x14a2b5040": 1, "482921": 1, "0x14a526d30": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"minor": 0, "flood": 0, "frequenc": 0, "durat": 0, "setup": [0, 1], "import": 0, "necessari": 0, "librari": 0, "retriev": [0, 1], "tide": [0, 1], "station": [0, 1], "s": 0, "data": [0, 1], "set": [0, 1], "datum": [0, 1], "mhhw": [0, 1], "A": 0, "note": 0, "assess": [0, 1], "qualiti": [0, 1], "por": 0, "1983": 0, "2022": 0, "watch": 0, "unit": 0, "identifi": 0, "epoch": 0, "analysi": 0, "adjust": 0, "from": 0, "calendar": 0, "year": 0, "storm": 0, "assign": 0, "threshold": 0, "calcul": [0, 1], "plot": [0, 1], "count": 0, "percent": 0, "chang": [0, 1], "over": 0, "both": [0, 1], "creat": [0, 1], "map": [0, 1], "citat": 0, "region": 1, "local": 1, "sea": [1, 2], "level": [1, 2], "altimetri": 1, "clip": 1, "time": 1, "seri": 1, "rate": 1, "magnitud": 1, "combin": 1, "sourc": 1, "tabl": 1, "welcom": 2, "indic": 2, "locat": 1, "malak": 1, "palau": 1, "gaug": 1, "eez": 1, "boundari": 1, "process": 1, "timeseri": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})