/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeoJSONUtils } from "../../src/utilities/geojson-utils";

describe("GeoJSONUtils", () => {

  it("should return geoJson point", () => {
    const point = GeoJSONUtils.point(-68.980986, 12.198599);

    const geoJson: any = {
      type: 'Point',
      coordinates: [-68.980986, 12.198599]
    }

    expect(point).toEqual(geoJson);
  });

  it("should return geoJson polygon", () => {
    const polygon = GeoJSONUtils.polygon(
      [
        -113.599831726514,
        53.458273089013
      ],
      [
        -113.600049996812,
        53.45827360864
      ],
      [
        -113.600052949158,
        53.457932503403
      ],
      [
        -113.599845224387,
        53.457931995732
      ],
      [
        -113.599834691275,
        53.457931970341
      ],
      [
        -113.599831726514,
        53.458273089013
      ]
    );

    const geoJson: any = {
      type: 'Polygon',
      coordinates: [
        [
          [
            -113.599831726514,
            53.458273089013
          ],
          [
            -113.600049996812,
            53.45827360864
          ],
          [
            -113.600052949158,
            53.457932503403
          ],
          [
            -113.599845224387,
            53.457931995732
          ],
          [
            -113.599834691275,
            53.457931970341
          ],
          [
            -113.599831726514,
            53.458273089013
          ]
        ]
      ]
    }

    expect(polygon).toEqual(geoJson);
  });

  it("should return geoJson multipolygon", () => {
    const multipolygon = GeoJSONUtils.multipolygon(
      [
        [
          -113.492068121648,
          53.55784419845
        ],
        [
          -113.492503551661,
          53.557778292305
        ],
        [
          -113.492467250002,
          53.557691409088
        ],
        [
          -113.492031508924,
          53.557756391816
        ],
        [
          -113.492068121648,
          53.55784419845
        ]
      ],
      [
        [
          -113.536966729027,
          53.618692548203
        ],
        [
          -113.537518089256,
          53.61867322157
        ],
        [
          -113.537502080295,
          53.618514703566
        ],
        [
          -113.536950735933,
          53.618534011314
        ],
        [
          -113.536966729027,
          53.618692548203
        ]
      ]
    );

    const geoJson: any = {
      type: 'MultiPolygon',
      coordinates: [
        [
          [
            [
              -113.492068121648,
              53.55784419845
            ],
            [
              -113.492503551661,
              53.557778292305
            ],
            [
              -113.492467250002,
              53.557691409088
            ],
            [
              -113.492031508924,
              53.557756391816
            ],
            [
              -113.492068121648,
              53.55784419845
            ]
          ],
          [
            [
              -113.536966729027,
              53.618692548203
            ],
            [
              -113.537518089256,
              53.61867322157
            ],
            [
              -113.537502080295,
              53.618514703566
            ],
            [
              -113.536950735933,
              53.618534011314
            ],
            [
              -113.536966729027,
              53.618692548203
            ]
          ]
        ]
      ]
    }

    expect(multipolygon).toEqual(geoJson);
  });

});