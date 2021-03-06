function Bio({ subtitle }) {
  return (
      <div className="container px-1 mb-5">
          <div className="row gx-4">
              <div className="col-sm-3">
                  <p className="p-3 border bg-light text-center">{subtitle}</p>
              </div>
              <div className="col gx-5">
                  <div className="row">
                      <div className="border bg-light">
                        <p className="pt-3 px-3">
                            If you’re wondering, my first name is pronounced: Andre. I’m a software engineer, working at Bank of America for 1 of their AIE (Application Integration Engineering) teams in Jersey City, as an apprentice. My experience with my team and the work has been great. I enjoy coding and tinkering with different languages, frameworks, etc. and that will get showcased on this site.
                        </p>
                        <p className="px-3">
                            Aside from coding I love 3D art. I’m very much still in the, learning how to walk, stage but as challenging as it is, I’m very excited to learn more and improve. If you’ve watched a video game trailer with high graphical detail or seen a movie with incredible CGI, that’s the goal.
                        </p>
                        <p className="pb-3 px-3">
                            When I’m not being a homebody with my PC related interests, you can find me at Liberty Park or any area in Jersey City, walking along the waterfront, admiring the views.
                        </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Bio;
