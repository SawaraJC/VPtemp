import React from "react";

const SponsorCard = ({ img }) => {
  return (
    <>
      <span className="mx-8 ">
        <div className=" h-150 max-w-44 rounded overflow-hidden shadow-lg backdrop-blur-sm inline-block">
          <img className="brightness-75" src={img} alt="brand Logo" />
        </div>
      </span>
    </>
  );
};
const SponsorsMedia = () => {
  let ListOfSponsors = [
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965527/VP-23/sponsors-photo/twj-01_o9auxe.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965467/VP-23/sponsors-photo/kiranacademy-01_jsoztm.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/herody-01_brshxy.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965714/VP-23/sponsors-photo/aecc-01_rsiu2e.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677048887/VP-23/sponsors-photo/newstride-01_hhrx5e.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677479947/VP-23/sponsors-photo/edwise-01_tvwxnw.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676206111/VP-23/sponsors-photo/peterengland-01_sgqpek.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/ather-01_vapcah.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/hero_new-01_etsbgs.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/stackos-01_mhietf.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/balaji-01_akpawr.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677419203/VP-23/sponsors-photo/haldiram-01_ki7j2w.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676870630/VP-23/sponsors-photo/budhani-01_h2vmka.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/smita-01_rudjre.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/growthschool-01_mhrxpp.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204645/VP-23/sponsors-photo/bliss_coffee-01_z9wsyq.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676965398/VP-23/sponsors-photo/interview_buddy-01_yd0371.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677038643/VP-23/sponsors-photo/wellness-01_xaj2v6.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677481571/VP-23/sponsors-photo/my_nutrition-01_jajigx.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677478746/VP-23/sponsors-photo/nufurn-01_umzvwp.png",
  ];
  let ListOfMediaPartners = [
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/samana-01_lh82tl.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/Akash_logo_s5ifiz.jpg",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/area37-01_q4qd2t.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/punyanagari-01_m2dg8k.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/dais-01_dycp5b.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677652119/VP-23/mediap-photos/collegedunia-01_ykivhy.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/teoi-01_ngjhgs.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/campustimes-01_hw6xpz.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/tgh-01_n1rihs.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676281999/VP-23/mediap-photos/radiocity-01_zyl0oa.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676351949/VP-23/mediap-photos/edtimes-01_lkmh1m.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/highereducation-01_rdcdif.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/knowafest-01_ju3fzv.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093104/VP-23/mediap-photos/noticebard-01_xr1a20.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676093105/VP-23/mediap-photos/startupfyi-01_p4fxc0.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676204666/VP-23/mediap-photos/cryptonewsz-01_vifskr.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676352855/VP-23/mediap-photos/indianstartupstories-01_qy6igq.png",
    "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677654022/VP-23/mediap-photos/blog_adda-01_wqujhm.png",
  ];
  return (
    <>
      <div className="bg-black group">
        <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
          Previous Sponsors
        </h1>
        <div className="relative flex overflow-x-hidden ">
          <div className="py-12 animate-marquee whitespace-nowrap ">
            {ListOfSponsors.map((img, index) => (
           
                <SponsorCard key={`sponsor${index}`} img={img} />
            
            ))}
          </div>
        </div>
        <h1 className="main-heading bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-4xl font-bold text-center py-8">
          Media Partners
        </h1>
        <div className="relative flex overflow-x-hidden bg-black">
          <div className="py-12 animate-marquee2 whitespace-nowrap ">
            {ListOfMediaPartners.map((img, index) => (
              <SponsorCard key={`media${index}`} img={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsMedia;
