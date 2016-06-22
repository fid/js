(function (w)
{
  w.Fid = function () {};
  w.Fid.generate = function (vendorKey, appKey, type, indicator, secret, location)
  {
    return 'FIDGOESHERE';
  };
  w.Fid.verify = function (fid, secret)
  {
    return false;
  };
  w.Fid.describe = function (fid)
  {
    return {
      "timeKey":   fid.substr(9, 9),
      "indicator": fid.substr(0, 1),
      "vendor":    fid.substr(1, 3),
      "app":       fid.substr(4, 2),
      "type":      fid.substr(6, 2),
      "location":  fid.substr(19, 5),
      "random":    fid.substr(25, 7),
      "verify":    fid.substr(31, 1)
    };
  };
}(window));
