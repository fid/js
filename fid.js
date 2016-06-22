(function (w)
{
  w.Fid = function () {};
  w.Fid.generate = function (vendorKey, appKey, type, indicator, secret, location)
  {
    var timeKey = Date.now().toString(36);
    while (timeKey.length < 9)
    {
      timeKey += '=';
    }
    var fid = indicator + vendorKey + appKey + type + '-';
    fid += timeKey + '-' + location + '-';
    fid += Math.random().toString(36).substring(7).substr(0, 7);
    return fid.toUpperCase();
  };
  w.Fid.verify = function (fid, secret)
  {
    if (fid.length != 32)
    {
      return false;
    }

    if (!fid.match(/[A-Z0-9=]{8}-[A-Z0-9=]{9}-[A-Z0-9=]{5}-[A-Z0-9=]{7}/))
    {
      return false;
    }

    if (secret && secret.length > 0)
    {
      console.log("Fid Secret Verification not supported");
    }

    return true;
  };
  w.Fid.describe = function (fid)
  {
    var timeKey = fid.substr(9, 9).replace('=', '');
    var mstime = parseInt(timeKey, 36);
    return {
      "timeKey":     fid.substr(9, 9),
      "indicator":   fid.substr(0, 1),
      "vendor":      fid.substr(1, 3),
      "app":         fid.substr(4, 2),
      "type":        fid.substr(6, 2),
      "location":    fid.substr(19, 5),
      "random":      fid.substr(25, 7),
      "verify":      fid.substr(31, 1),
      "timestamp":   Math.floor(mstime / 1000),
      "mstimestamp": mstime
    };
  };
}(window));
